import LinearMovePiece from './linear-move-piece.ts'
import { Position } from './index.ts'

class Rook extends LinearMovePiece {
    override getDirs(): Position[] {
        return [{r: -1, c: 0}, {r: 1, c: 0}, {r: 0, c: -1}, {r: 0, c: 1}]
    }

    override getSymbol(): string {
        return 'R'
    }
}

export default Rook