abstract class Piece {
    location: Position

    constructor(location: Position) {
        this.location = location
    }

    abstract calculateMoves(board: Piece[][]): Position[]
}

export default Piece