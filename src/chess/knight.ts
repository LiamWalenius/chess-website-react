import Piece from "./piece.ts"

class Knight extends Piece {
    static moves = [[1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2]]

    calculateMoves(board: Piece[][]): Position[] {
        let possibleMoves = []

        for (const move of Knight.moves) {
            const newLoc = {r: this.location.r + move[0], c: this.location.c + move[1]}
            if (board[newLoc.r][newLoc.c] === null) {
                possibleMoves.push(newLoc)
            }
        }

        return possibleMoves
    }
}

export default Knight