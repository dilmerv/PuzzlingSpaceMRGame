import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Audio as Audio_0 } from "@zcomponent/core/lib/components/Audio";
import { Box as Box_1 } from "@zcomponent/three/lib/components/meshes/Box";
import { MeshStandardMaterial as MeshStandardMaterial_2 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { Group as Group_3 } from "@zcomponent/three/lib/components/Group";
import { ActivateState as ActivateState_4 } from "@zcomponent/core/lib/behaviors/ActivateState";
import { Sphere as Sphere_5 } from "@zcomponent/three/lib/components/meshes/Sphere";
import { PlaySound as PlaySound_6 } from "@zcomponent/core/lib/behaviors/PlaySound";
import { Collider as Collider_7 } from "@zcomponent/physics/lib/components/Colliders/Collider";
import { Text as Text_8 } from "@zcomponent/three/lib/components/text/Text";
import { DefaultCookieConsent as DefaultCookieConsent_9 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultEnvironment as DefaultEnvironment_10 } from "@zcomponent/three/lib/components/environments/DefaultEnvironment";
import { DefaultLoader as DefaultLoader_11 } from "@zcomponent/core/lib/components/DefaultLoader";
import { DirectionalLight as DirectionalLight_12 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { GLTF as GLTF_13 } from "@zcomponent/three/lib/components/models/GLTF";
import { GameUtilities as GameUtilities_14 } from "./Scripts/GameUtilities";
import { XRController as XRController_15 } from "@zcomponent/three-webxr/lib/components/XRController";
import { SetGrabState as SetGrabState_16 } from "@zcomponent/physics/lib/behaviors/SetGrabState";
import { ToggleGrabState as ToggleGrabState_17 } from "@zcomponent/physics/lib/behaviors/ToggleGrabState";
import { MenuPanel as MenuPanel_18 } from "./Scripts/MenuPanel";
import { PuzzlePieces as PuzzlePieces_19 } from "./Scripts/PuzzlePieces";
import { RigidBody as RigidBody_20 } from "@zcomponent/physics/lib/behaviors/RigidBody";
import { Image as Image_21 } from "@zcomponent/three/lib/components/Image";
import { RigidbodyEventEmitter as RigidbodyEventEmitter_22 } from "@zcomponent/physics/lib/components/BodyEventEmitter";
import { RigidbodyGrabber as RigidbodyGrabber_23 } from "@zcomponent/physics/lib/components/RigidbodyGrabber";
import { ShadowPlane as ShadowPlane_24 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { TeleportManager as TeleportManager_25 } from "@zcomponent/three-webxr/lib/components/TeleportManager";
import { TurnManager as TurnManager_26 } from "@zcomponent/three-webxr/lib/components/TurnManager";
import { XRRigVRPassthrough as XRRigVRPassthrough_27 } from "@zcomponent/three-webxr/lib/components/XRRigVRPassthrough";
import { XRCamera as XRCamera_28 } from "@zcomponent/three-webxr/lib/components/XRCamera";
import { XRDefaultLoader as XRDefaultLoader_29 } from "@zcomponent/three-webxr/lib/components/XRDefaultLoader";
import { XRManager as XRManager_30 } from "@zcomponent/three-webxr/lib/components/XRManager";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		BackgroundTrack: Audio_0 & {
			behaviors: {

			}
		},
		Box: Box_1 & {
			behaviors: {

			}
		},
		Box0: Box_1 & {
			behaviors: {

			}
		},
		Box1: Box_1 & {
			behaviors: {

			}
		},
		Box2: Box_1 & {
			behaviors: {

			}
		},
		Box3: Box_1 & {
			behaviors: {

			}
		},
		Box4: Box_1 & {
			behaviors: {

			}
		},
		ButtonDefault: MeshStandardMaterial_2 & {
			behaviors: {

			}
		},
		ButtonGray: MeshStandardMaterial_2 & {
			behaviors: {

			}
		},
		ButtonGroup: Group_3 & {
			behaviors: {
				0: ActivateState_4,
				ActivateState: ActivateState_4,
			}
		},
		ButtonGroup0: Group_3 & {
			behaviors: {
				0: ActivateState_4,
				ActivateState: ActivateState_4,
			}
		},
		ButtonGroup1: Group_3 & {
			behaviors: {

			}
		},
		ButtonGroup2: Group_3 & {
			behaviors: {

			}
		},
		ButtonGroup3: Group_3 & {
			behaviors: {

			}
		},
		ButtonGroup5: Group_3 & {
			behaviors: {
				0: ActivateState_4,
				ActivateState: ActivateState_4,
			}
		},
		ButtonRed: MeshStandardMaterial_2 & {
			behaviors: {

			}
		},
		CheckProximityButton: Sphere_5 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
			}
		},
		Collider_Puzzle_1_Cell_00: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_1_Cell_01: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_1_Cell_02: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_1_Cell_03: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_1_Cell_04: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_2_Cell_00: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_2_Cell_01: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_2_Cell_02: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_2_Cell_03: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_2_Cell_04: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_2_Cell_05: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_2_Cell_06: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_2_Cell_07: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_2_Cell_08: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_2_Cell_09: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_2_Cell_090: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_2_Cell_10: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_2_Cell_11: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_2_Cell_12: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_2_Cell_13: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_3_Cell_00: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_3_Cell_01: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_3_Cell_02: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_3_Cell_03: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_3_Cell_04: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_3_Cell_05: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_3_Cell_06: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_3_Cell_07: Collider_7 & {
			behaviors: {

			}
		},
		Collider_Puzzle_3_Cell_08: Collider_7 & {
			behaviors: {

			}
		},
		DebugGroup: Group_3 & {
			behaviors: {

			}
		},
		DebugOptions: Text_8 & {
			behaviors: {

			}
		},
		DefaultCookieConsent: DefaultCookieConsent_9 & {
			behaviors: {

			}
		},
		DefaultEnvironment: DefaultEnvironment_10 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_11 & {
			behaviors: {

			}
		},
		Defaults: Group_3 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_12 & {
			behaviors: {

			}
		},
		Edge: GLTF_13 & {
			behaviors: {

			}
		},
		Edge0: GLTF_13 & {
			behaviors: {

			}
		},
		Edge1: GLTF_13 & {
			behaviors: {

			}
		},
		Edge11: GLTF_13 & {
			behaviors: {

			}
		},
		Edge2: GLTF_13 & {
			behaviors: {

			}
		},
		Edge3: GLTF_13 & {
			behaviors: {

			}
		},
		Edge4: GLTF_13 & {
			behaviors: {

			}
		},
		Edge5: GLTF_13 & {
			behaviors: {

			}
		},
		Edge6: GLTF_13 & {
			behaviors: {

			}
		},
		Edge7: GLTF_13 & {
			behaviors: {

			}
		},
		Edge8: GLTF_13 & {
			behaviors: {

			}
		},
		Edge9: GLTF_13 & {
			behaviors: {

			}
		},
		Environment: Group_3 & {
			behaviors: {

			}
		},
		Frame_2D: Group_3 & {
			behaviors: {

			}
		},
		Frame_3D: Group_3 & {
			behaviors: {

			}
		},
		GameStateText: Text_8 & {
			behaviors: {

			}
		},
		GameUtilities: Group_3 & {
			behaviors: {
				0: PlaySound_6,
				PlayAllSolved: PlaySound_6,
				1: GameUtilities_14,
				GameUtilities: GameUtilities_14,
				2: PlaySound_6,
				PlayPieceSolved: PlaySound_6,
			}
		},
		Left_Controller: XRController_15 & {
			behaviors: {
				0: SetGrabState_16,
				SetGrabState: SetGrabState_16,
				1: ToggleGrabState_17,
				ToggleGrabState: ToggleGrabState_17,
			}
		},
		MenuPanel: Group_3 & {
			behaviors: {
				0: MenuPanel_18,
				MenuPanel: MenuPanel_18,
			}
		},
		MeshStandardMaterial: MeshStandardMaterial_2 & {
			behaviors: {

			}
		},
		MeshStandardMaterial1: MeshStandardMaterial_2 & {
			behaviors: {

			}
		},
		OutputTargetsButton: Sphere_5 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
			}
		},
		PlayButton_Puzzle_1: Sphere_5 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: ActivateState_4,
				ActivateState: ActivateState_4,
			}
		},
		PlayButton_Puzzle_2: Sphere_5 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: ActivateState_4,
				ActivateState: ActivateState_4,
			}
		},
		PlayButton_Puzzle_3: Sphere_5 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: ActivateState_4,
				ActivateState: ActivateState_4,
			}
		},
		Puzzle: Group_3 & {
			behaviors: {
				0: PuzzlePieces_19,
				PuzzlePieces: PuzzlePieces_19,
			}
		},
		PuzzleDesk: Box_1 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		PuzzleFrameText: Text_8 & {
			behaviors: {

			}
		},
		PuzzleFull: Group_3 & {
			behaviors: {

			}
		},
		Puzzle_1_Cell_00: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_1_Cell_01: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_1_Cell_02: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_1_Cell_03: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_1_Cell_04: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_1_Full: GLTF_13 & {
			behaviors: {

			}
		},
		Puzzle_1_Icon_Completed: Image_21 & {
			behaviors: {

			}
		},
		Puzzle_1_Text: Text_8 & {
			behaviors: {

			}
		},
		Puzzle_2_Cell_00: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_2_Cell_01: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_2_Cell_02: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_2_Cell_03: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_2_Cell_04: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_2_Cell_05: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_2_Cell_06: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_2_Cell_07: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_2_Cell_08: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_2_Cell_09: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_2_Cell_090: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_2_Cell_10: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_2_Cell_11: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_2_Cell_12: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_2_Cell_13: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_2_Full: GLTF_13 & {
			behaviors: {

			}
		},
		Puzzle_2_Icon_Completed: Image_21 & {
			behaviors: {

			}
		},
		Puzzle_2_Text: Text_8 & {
			behaviors: {

			}
		},
		Puzzle_3_Cell_00: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_3_Cell_01: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_3_Cell_02: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_3_Cell_03: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_3_Cell_04: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_3_Cell_05: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_3_Cell_06: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_3_Cell_07: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_3_Cell_08: GLTF_13 & {
			behaviors: {
				0: RigidBody_20,
				RigidBody: RigidBody_20,
			}
		},
		Puzzle_3_Full: GLTF_13 & {
			behaviors: {

			}
		},
		Puzzle_3_Icon_Completed: Image_21 & {
			behaviors: {

			}
		},
		Puzzle_3_Text: Text_8 & {
			behaviors: {

			}
		},
		Right_Controller: XRController_15 & {
			behaviors: {
				0: SetGrabState_16,
				SetGrabState: SetGrabState_16,
				1: ToggleGrabState_17,
				ToggleGrabState: ToggleGrabState_17,
			}
		},
		RigidbodyEventEmitter_16: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_17: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_170: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_18: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_19: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_200: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_210: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_22: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_23: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_24: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_26: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_27: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_28: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_280: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_29: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_31: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_32: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_33: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_34: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_35: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_36: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_37: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_38: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_39: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_40: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_41: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_42: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_43: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyEventEmitter_44: RigidbodyEventEmitter_22 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
				1: PlaySound_6,
				PlaySound0: PlaySound_6,
			}
		},
		RigidbodyGrabber_Left: RigidbodyGrabber_23 & {
			behaviors: {

			}
		},
		RigidbodyGrabber_Right: RigidbodyGrabber_23 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_24 & {
			behaviors: {

			}
		},
		TargetButton: Sphere_5 & {
			behaviors: {
				0: PlaySound_6,
				PlaySound: PlaySound_6,
			}
		},
		Teleport_Manager: TeleportManager_25 & {
			behaviors: {

			}
		},
		Text: Text_8 & {
			behaviors: {

			}
		},
		Text1: Text_8 & {
			behaviors: {

			}
		},
		Text3: Text_8 & {
			behaviors: {

			}
		},
		Turn_Manager: TurnManager_26 & {
			behaviors: {

			}
		},
		Volume: Box_1 & {
			behaviors: {

			}
		},
		Volume1: Box_1 & {
			behaviors: {

			}
		},
		XRRigVRPassthrough: XRRigVRPassthrough_27 & {
			behaviors: {

			}
		},
		XR_Camera: XRCamera_28 & {
			behaviors: {

			}
		},
		XR_DefaultLoader: XRDefaultLoader_29 & {
			behaviors: {

			}
		},
		XR_Manager: XRManager_30 & {
			behaviors: {

			}
		},
		the_moon_glb: GLTF_13 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {
		GameState: Layer & { clips: {
			Playing: LayerClip;
			Solved: LayerClip;
		}};
		FrameStates: Layer & { clips: {
			NewPieceSolved0: LayerClip;
		}};
		Environment: Layer & { clips: {
			Planets0: LayerClip;
		}};
	}};

	/**
	 * The position, in 3D space, of this node relative to its parent. The three elements of the array correspond to the `x`, `y`, and `z` components of position.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public position: Observable<[x: number, y: number, z: number]>;

	/**
	 * The rotation, in three dimensions, of this node relative to its parent. The three elements of the array correspond to Euler angles - yaw, pitch and roll.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public rotation: Observable<[x: number, y: number, z: number]>;

	/**
	 * The scale, in three dimensions, of this node relative to its parent. The three elements of the array correspond to scales in the the `x`, `y`, and `z` axis.
	 * 
	 * @zprop
	 * @zdefault [1,1,1]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public scale: Observable<[x: number, y: number, z: number]>;

	/**
	 * Determines if this object and its children are rendered to the screen.
	 * 
	 * @zprop
	 * @zdefault true
	 * @zgroup Appearance
	 * @zgrouppriority 11
	 */
	public visible: Observable<boolean>;
}

export default Comp;
