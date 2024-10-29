import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime, Observable } from "@zcomponent/core";
import { Collider } from "@zcomponent/physics/lib";
import { RigidBody } from "@zcomponent/physics/lib/behaviors/RigidBody";
import { IRigidBody, MotionType } from "@zcomponent/physics/lib/components/IRigidBody";
import { randInt } from "three/src/math/MathUtils";
import { shuffleArray } from './PuzzleUtilities';
import { default as Scene} from "../Scene.zcomp";
import puzzles from "./Puzzles";

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

/**
 * @zbehavior 
 **/
export class PuzzlePieces extends Behavior<Component> {

	/**
	 * @zui
	 */
	public puzzleNumber = new Observable(1);

	/**
	 * @zui
	 * @zdefault 0.03
	 */
	public proximityThreshold = new Observable(0.03);

	/**
	 * @zui
	 * @zdefault -0.05
	 */
	public randomPlacementXOffset = new Observable(-0.05);

	/**
	 * @zui
	 * @zdefault 0.02
	 */
	public randomPlacementYOffset = new Observable(0.02);

	/**
	 * @zui
	 * @zdefault -0.03
	 */
	public randomPlacementZOffset = new Observable(-0.03);

	private pieceStates: { [key: string]: { target: PuzzlePieceTransform } } = {};
	protected zcomponent = this.getZComponentInstance(Scene);

	constructor(contextManager: ContextManager, instance: Component, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

		this.register(this.puzzleNumber, selectedPuzzle => {
			// toggle puzzle pieces
			this.instance.children.forEach(child => 
			{ 
				this.toggleVisibility(child, false);
			});

			this.filteredChildrenByLevel().forEach(child => { 
				this.toggleVisibility(child, true);
			});

			this.zcomponent.nodes.PuzzleFull.children.forEach(child => { 
				child.element.visible = child.element.__zlabel.includes(`Puzzle_${selectedPuzzle}`);
			});
		});

		// default it to load level 1
		this.initializeTargetPositions(1)
	}

	toggleVisibility(child: any, visible: boolean) {
		child.element.visible = visible;
		if(!visible) {
			// since we can't hide colliders let's move them away from the user
			child.position.value = [100, 100, 100];
		}
	}

	filteredChildrenByLevel() {
		return this.instance.children.filter(v => v.element.__zlabel.includes(`Puzzle_${this.puzzleNumber.value}`));
	}
	
	outputTransforms() {
		const newPuzzle : Puzzle = {
				name : "Space Family",
				frame : "2D",
				pieces : []
		};

		this.filteredChildrenByLevel().forEach((child: any, index: number) => {
			// Get the initial position and rotation
			const initialPosition = child.element.position;
			const initialRotation = child.element.rotation;

			newPuzzle.pieces.push(
			{
				name : child.element.__zlabel,
				position: { x: initialPosition.x, y: initialPosition.y, z: initialPosition.z },
				rotation: { x: initialRotation.x, y: initialRotation.y, z: initialRotation.z },
			});
		});
		console.log(`${JSON.stringify(newPuzzle)}`)
	}

	// Method to initialize target positions for each piece
	initializeTargetPositions(puzzleNumber: number) {
		// clear it out
		this.pieceStates = {};

		this.puzzleNumber.value = puzzleNumber;
		const puzzle : Puzzle = puzzles[this.puzzleNumber.value - 1];

		// update completion icon
		this.toggleCompletionState(false);
		
		// set the appropiate frame
		this.zcomponent.nodes.Frame_2D.visible.value = puzzle.frame == "2D";
		this.zcomponent.nodes.Frame_3D.visible.value = puzzle.frame == "3D";
		
		shuffleArray(this.filteredChildrenByLevel()).forEach((child: any, index: number) => {
			
			const defaultPiece: PuzzlePiece = { name: '', position: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 } };
			const target : PuzzlePiece = puzzle.pieces.find(s => s.name == child.element.__zlabel) ?? defaultPiece;
			
			// set target position to initial position and rotation
			this.pieceStates[child.element.__zlabel] = {
				target: {
					position: { x: target.position.x, y: target.position.y, z: target.position.z },
					rotation: { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }
				}
			};

			// set rigid body on each child as kinematic to be able to move it
			// and avoid weird physic movements
			const rigidBody = child?.getBehavior(RigidBody);
			if(rigidBody) {
				rigidBody.motionType.value = MotionType.DYNAMIC;
			}

			// move the piece to its current position
			child.position.value = [index * this.randomPlacementXOffset.value, index * this.randomPlacementYOffset.value, index * this.randomPlacementZOffset.value];
			child.rotation.value = puzzle.frame == "2D" ? [0, 0, 0] : [target.rotation.x, target.rotation.y, target.rotation.z];
		});
	}

	placeAllAtTarget() {
		this.filteredChildrenByLevel().forEach((child: any, index: number) => {
			// Move the piece to its current position
			const targetPosition = this.pieceStates[child.element.__zlabel].target.position;
			child.position.value = [targetPosition.x, targetPosition.y, targetPosition.z];
		});
	}

	// Method to check if a puzzle piece is close to its target position
	isCloseToTarget(pieceKey: string): boolean {
		const currentPiece = this.zcomponent.nodeByLabel.get(pieceKey)?.element.position;
		const targetPiece = this.pieceStates[pieceKey].target.position;

		// Calculate distance between current piece and target position
		const distance = Math.sqrt(
			Math.pow(currentPiece.x - targetPiece.x, 2) +
			Math.pow(currentPiece.y - targetPiece.y, 2) +
			Math.pow(currentPiece.z - targetPiece.z, 2)
		);

		// Check if the distance is within the proximity threshold
		return distance < this.proximityThreshold.value;
	}

	// Method to check if all pieces are in the correct position
	checkAllPiecesProximity(lastSelectedBody?: IRigidBody) {
		// check if individual piece grabbed is close to the target
		if(lastSelectedBody) {
			const lastSelectedBodyName = lastSelectedBody.getInstance().element.__zlabel;
			if(this.isCloseToTarget(lastSelectedBodyName)){
				lastSelectedBody.motionType.value = MotionType.KINEMATIC;
				this.zcomponent.nodes.GameUtilities.behaviors.PlayPieceSolved.perform();
				this.zcomponent.animation.layers.FrameStates.clips.NewPieceSolved0.play();
			}
		}

		let allClose = true;
		// check if all pieces are within the target
		for (const key in this.pieceStates) {
			if (!this.isCloseToTarget(key)) {
				allClose = false;
				this.zcomponent.nodes.GameStateText.text.value = "At least one piece is not close to its target!";
				break;
			}
		}
		
		if(allClose) {
			this.zcomponent.nodes.GameStateText.text.value = "All pieces are close to their target!";
			this.zcomponent.animation.layers.GameState.clips.Solved.play();
			this.zcomponent.nodes.GameUtilities.behaviors.PlayAllSolved.perform();

			// update completion icon
			this.toggleCompletionState(true);
		}
		return allClose; // Return true if all pieces are close to their target
	}

	dispose() {
		return super.dispose();
	}

	toggleCompletionState(hasCompletedPuzzle: boolean) {
		// show or hide completion icon
		if(this.puzzleNumber.value == 1) {
			this.zcomponent.nodes.Puzzle_1_Icon_Completed.visible.value = hasCompletedPuzzle;
		}
		else if (this.puzzleNumber.value == 2) {
			this.zcomponent.nodes.Puzzle_2_Icon_Completed.visible.value = hasCompletedPuzzle;
		}
		else if (this.puzzleNumber.value == 3) {
			this.zcomponent.nodes.Puzzle_3_Icon_Completed.visible.value = hasCompletedPuzzle;
		}
	}
}

// Run at design time
registerBehaviorRunAtDesignTime(PuzzlePieces);
