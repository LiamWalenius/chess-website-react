import LinearMovePiece from "./linear-move-piece.ts"

class Bishop extends LinearMovePiece {
    getDirs(): Position[] {
        return [{r: -1, c: -1}, {r: 1, c: -1}, {r: 1, c: 1}, {r: -1, c: 1}]
    }
}

export default Bishop