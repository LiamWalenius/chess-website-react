import Piece from "./piece.ts"

class Knight extends Piece {
    static moves = [[1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2]]

    constructor(location: Point) {
        super(location)
    }

    calculateMoves(board: Piece[][]): Point[] {
        let possibleMoves = []

        for (const move of Knight.moves) {
            const newLoc = new Point(this.location.x + move[0], this.location.y + move[1])
            if (board[newLoc.x][newLoc.y] === null) {
                possibleMoves.push(newLoc)
            }
        }

        return possibleMoves
    }
}

export default Knight