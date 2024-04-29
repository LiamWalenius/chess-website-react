import Piece from "./piece.ts"
import Chess from "./chess.ts"

abstract class LinearMovePiece extends Piece {
    abstract getDirs(): Position[]

    calculateMoves(board: Chess.Square[][]): Position[] {
        let possibleMoves = []

        for (const dir of this.getDirs()) {
            for (let newPos = this.pos; newPos.r < Chess.size && newPos.c < Chess.size; newPos.r += dir.r, newPos.c += dir.c) {
                if (board[newPos.r][newPos.c] == Chess.Square.Occupied) {
                    break
                }

                possibleMoves.push(newPos)
            }
        }

        return possibleMoves
    }
}

export default LinearMovePiece