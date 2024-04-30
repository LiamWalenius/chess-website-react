import Piece from "./piece.ts"
import Chess from "./chess.ts"

abstract class FixedMovePiece extends Piece {
    abstract getMoves(): Position[]

    calculateMoves(board: Chess.Square[][]): Position[] {
        let possibleMoves = []

        for (const move of this.getMoves()) {
            const newPos = {r: this.pos.r + move.r, c: this.pos.c + move.c}

            if (!Chess.posInBoard(newPos)) {
                continue
            }

            if (board[newPos.r][newPos.c].isEmpty()) {
                possibleMoves.push(newPos)
            }
        }

        return possibleMoves
    }
}

export default FixedMovePiece