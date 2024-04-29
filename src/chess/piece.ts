abstract class Piece {
    location: Point
    abstract calculateMoves(board: Piece[][]): Point[];

    protected constructor(location: Point) {
        this.location = location
    }
}

export default Piece