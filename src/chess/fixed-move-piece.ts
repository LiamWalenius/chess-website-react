import Piece from "./piece.ts"
import Chess from "./chess.ts"

abstract class FixedMovePiece extends Piece {
    abstract getMoves(): Position[]

    override calculateMoves(board: Chess.Board): Position[] {
        let possibleMoves = []

        for (const move of this.getMoves()) {
            const newPos = {r: this.pos.r + move.r, c: this.pos.c + move.c}

            if (!board.posInBoard(newPos)) {
                continue
            }

            const piece = board.squareAt(newPos).piece

            if (piece === null || this.team != piece.team) {
                possibleMoves.push(newPos)
            }
        }

        return possibleMoves
    }
}

export default FixedMovePiece