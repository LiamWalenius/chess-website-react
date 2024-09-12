import FixedMovePiece from './fixed-move-piece.ts'
import { Chess, Position } from './index.ts'

class Pawn extends FixedMovePiece {
    hasMoved: boolean = false

    override getMoves(): Position[] {
        let moves = [{r: -1, c: 0}]

        if (!this.hasMoved) {
            moves.push({r: -2, c: 0})
        }

        if (this.team === Chess.Team.Black) {
            for (let move of moves) {
                move.r *= -1
            }
        }

        return moves
    }

    override calculateMoves(board: Chess.Board): Position[] {
        let possibleMoves = super.calculateMoves(board)

        const capturePositions = [{r: -1, c: -1}, {r: -1, c: 1}]
        for (const cap of capturePositions) {
            const newPos = {
                r: this.pos.r + ((this.team == Chess.Team.White) ? cap.r : -cap.r),
                c: this.pos.c + cap.c
            }

            if (!board.posInBoard(newPos)) {
                continue
            }

            const piece = board.squareAt(newPos).piece
            if (piece === null) {
                continue
            }

            if (piece.team !== this.team) {
                possibleMoves.push(newPos)
            }
        }

        return possibleMoves
    }

    override getSymbol(): string {
        return 'P'
    }
}

export default Pawn