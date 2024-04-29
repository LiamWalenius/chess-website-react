import Piece from "./piece.ts"

class Pawn extends Piece {
    calculateMoves(board: Piece[][]): Position[] {
        let possibleMoves = []

        for (let i = 1; i <= 2; i++) {
            const newPos = {r: this.location.r, c: this.location.c - i}

            if (board[newPos.r][newPos.c] === null) {
                possibleMoves.push(newPos)
            }
        }

        return possibleMoves
    }
}

export default Pawn