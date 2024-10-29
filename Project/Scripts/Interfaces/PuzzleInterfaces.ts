// Define the Position interface
interface Position {
    x: number;
    y: number;
    z: number;
}

interface Rotation {
    x: number;
    y: number;
    z: number;
}

// Define the PuzzlePiece interface
interface PuzzlePiece {
    name: string;
    position: Position;
    rotation: Rotation;
}

// Define the Puzzle interface
interface Puzzle {
    name: string;
    frame: string;
    pieces: PuzzlePiece[];
}

// Define an interface to store position and rotation
interface PuzzlePieceTransform {
	position: { x: number, y: number, z: number };
	rotation: { x: number, y: number, z: number };
}
