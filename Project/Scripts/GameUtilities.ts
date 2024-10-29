import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime } from "@zcomponent/core";
import { default as Scene} from "../Scene.zcomp";

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

/**
 * @zbehavior 
 **/
export class GameUtilities extends Behavior<Component> {

	protected zcomponent = this.getZComponentInstance(Scene);

	constructor(contextManager: ContextManager, instance: Component, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

		this.register(this.zcomponent.nodes.RigidbodyGrabber_Left.onRelease, lastSelectedBody => {
			this.zcomponent.nodes.Puzzle.behaviors.PuzzlePieces.checkAllPiecesProximity(lastSelectedBody);
		});

		this.register(this.zcomponent.nodes.RigidbodyGrabber_Right.onRelease, lastSelectedBody => {
			this.zcomponent.nodes.Puzzle.behaviors.PuzzlePieces.checkAllPiecesProximity(lastSelectedBody);
		});
	}

	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
registerBehaviorRunAtDesignTime(GameUtilities);
