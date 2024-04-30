import Piece from "./piece.ts"
import Chess from "./chess.ts"

abstract class LinearMovePiece extends Piece {
    abstract getDirs(): Position[]

    override calculateMoves(board: Chess.Board): Position[] {
        let possibleMoves = []

        for (const dir of this.getDirs()) {
            for (let newPos = this.pos; board.posInBoard(newPos); newPos.r += dir.r, newPos.c += dir.c) {
                if (!board.squareAt(newPos).isEmpty()) {
                    break
                }

                possibleMoves.push(newPos)
            }
        }

        return possibleMoves
    }
}

export default LinearMovePiece