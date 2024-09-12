import FixedMovePiece from './fixed-move-piece.ts'
import { Chess, Position } from './index.ts'

class King extends FixedMovePiece {
    override getMoves(): Position[] {
        return [
            {r: 0, c: -1}, {r: 0, c: 1}, {r: -1, c: 0}, {r: 1, c: 0},
            {r: -1, c: -1}, {r: 1, c: -1}, {r: 1, c: 1}, {r: -1, c: 1}
        ]
    }

    override calculateMoves(board: Chess.Board): Position[] {
        let possibleMoves = []

        for (const newPos of super.calculateMoves(board)) {
            const square = board.squareAt(newPos)

            if ((this.team == Chess.Team.White && !square.attackedByBlack) || (this.team == Chess.Team.Black && !square.attackedByWhite)) {
                possibleMoves.push(newPos)
            }
        }

        return possibleMoves
    }

    override getSymbol(): string {
        return 'K'
    }
}

export default King