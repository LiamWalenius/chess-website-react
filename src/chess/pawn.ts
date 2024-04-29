import Piece from "./piece.ts"
import Chess from "./chess.ts"

class Pawn extends Piece {
    calculateMoves(board: Chess.Square[][]): Position[] {
        let possibleMoves = []

        for (let i = 1; i <= 2; i++) {
            const newPos = {r: this.pos.r, c: this.pos.c - i}

            if (board[newPos.r][newPos.c] == Chess.Square.Empty) {
                possibleMoves.push(newPos)
            }
        }

        return possibleMoves
    }
}

export default Pawn