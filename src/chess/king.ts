import FixedMovePiece from './fixed-move-piece.ts'
import { Chess, Position } from './index.ts'

class King extends FixedMovePiece {
    override getOffsets(): Position[] {
        return [
            {r: 0, c: -1}, {r: 0, c: 1}, {r: -1, c: 0}, {r: 1, c: 0},
            {r: -1, c: -1}, {r: 1, c: -1}, {r: 1, c: 1}, {r: -1, c: 1}
        ]
    }

    override calculateMoves(board: Chess.Board): Position[] {
        const canMoveToPos = (pos: Position): boolean => {
            const square = board.squareAt(pos)
            return (this.team == Chess.Team.White && !square.attackedByBlack) || (this.team == Chess.Team.Black && !square.attackedByWhite)
        }

        return super.calculateMoves(board).filter(canMoveToPos)
    }

    override getSymbol(): string {
        return 'K'
    }
}

export default King