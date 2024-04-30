import FixedMovePiece from "./fixed-move-piece.ts"

class Horse extends FixedMovePiece {
    override getMoves(): Position[] {
        return [
            {r: 1, c: -2}, {r: 2, c: -1}, {r: 2, c: 1}, {r: 1, c: 2},
            {r: -1, c: 2}, {r: -2, c: 1}, {r: -2, c: -1}, {r: -1, c: -2}
        ]
    }
}

export default Horse