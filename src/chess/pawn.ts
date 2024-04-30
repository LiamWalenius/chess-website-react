import FixedMovePiece from "./fixed-move-piece.ts"
import Chess from "./chess.ts"

class Pawn extends FixedMovePiece {
    override getMoves(): Position[] {
        switch (this.team){
            case Chess.Team.White:
                return [{r: 0, c: -1}, {r: 0, c: -2}]
            case Chess.Team.Black:
                return [{r: 0, c: 1}, {r: 0, c: 2}]
        }
    }
}

export default Pawn