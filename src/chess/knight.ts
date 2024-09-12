import FixedMovePiece from './fixed-move-piece.ts'
import { Position } from './index.ts'

class Knight extends FixedMovePiece {
    override getOffsets(): Position[] {
        return [
            {r: 1, c: -2}, {r: 2, c: -1}, {r: 2, c: 1}, {r: 1, c: 2},
            {r: -1, c: 2}, {r: -2, c: 1}, {r: -2, c: -1}, {r: -1, c: -2}
        ]
    }

    override getSymbol(): string {
        return 'N'
    }
}

export default Knight