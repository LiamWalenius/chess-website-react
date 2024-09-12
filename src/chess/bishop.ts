import LinearMovePiece from './linear-move-piece.ts'
import { Position } from './index.ts'

class Bishop extends LinearMovePiece {
    override getDirs(): Position[] {
        return [{r: -1, c: -1}, {r: 1, c: -1}, {r: 1, c: 1}, {r: -1, c: 1}]
    }

    override getSymbol(): string {
        return 'B'
    }
}

export default Bishop