import FixedMovePiece from "./fixed-move-piece.ts"
import Piece from "./piece.ts"

class Pawn extends FixedMovePiece {
    getMoves(): Position[] {
        switch (this.team){
            case Piece.Team.White:
                return [{r: 0, c: -1}, {r: 0, c: -2}]
            case Piece.Team.Black:
                return [{r: 0, c: 1}, {r: 0, c: 2}]
        }
    }
}

export default Pawn