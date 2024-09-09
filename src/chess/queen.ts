import LinearMovePiece from "./linear-move-piece.ts"

class Queen extends LinearMovePiece {
    override getDirs(): Position[] {
        return [
            {r: 0, c: -1}, {r: 0, c: 1}, {r: -1, c: 0}, {r: 1, c: 0},
            {r: -1, c: -1}, {r: 1, c: -1}, {r: 1, c: 1}, {r: -1, c: 1}
        ]
    }

    override getSymbol(): string {
        return 'Q'
    }
}

export default Queen