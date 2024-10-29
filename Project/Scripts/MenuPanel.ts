import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime } from "@zcomponent/core";
import { Box as Box } from "@zcomponent/three/lib/components/meshes/Box";
import { Group } from "three";
import { default as Scene} from "../Scene.zcomp";


interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

/**
 * @zbehavior 
 **/
export class MenuPanel extends Behavior<Component> {

	protected zcomponent = this.getZComponentInstance(Scene);

	constructor(contextManager: ContextManager, instance: Component, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

		this.register(this.zcomponent.nodes.PlayButton_Puzzle_1.onClick, evt => {
			this.zcomponent.nodes.Puzzle.behaviors.PuzzlePieces.initializeTargetPositions(1);
		});

		this.register(this.zcomponent.nodes.PlayButton_Puzzle_2.onClick, evt => {
			this.zcomponent.nodes.Puzzle.behaviors.PuzzlePieces.initializeTargetPositions(2);
		});

		this.register(this.zcomponent.nodes.PlayButton_Puzzle_3.onClick, evt => {
			this.zcomponent.nodes.Puzzle.behaviors.PuzzlePieces.initializeTargetPositions(3);
		});

		this.register(this.zcomponent.nodes.TargetButton.onClick, evt => {
			this.zcomponent.nodes.Puzzle.behaviors.PuzzlePieces.placeAllAtTarget();
		});

		this.register(this.zcomponent.nodes.CheckProximityButton.onClick, evt => {
			this.zcomponent.nodes.Puzzle.behaviors.PuzzlePieces.checkAllPiecesProximity();
		});

		this.register(this.zcomponent.nodes.OutputTargetsButton.onClick, evt => {
			this.zcomponent.nodes.Puzzle.behaviors.PuzzlePieces.outputTransforms();
		});
	}

	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Run at design time
registerBehaviorRunAtDesignTime(MenuPanel);
