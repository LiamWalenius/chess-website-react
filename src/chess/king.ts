import FixedMovePiece from "./fixed-move-piece.ts"
import Chess from "./chess.ts"

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
            if (
                (this.team == Chess.Team.White && !board.squareAt(newPos).attackedByBlack)
                || (this.team == Chess.Team.Black && !board.squareAt(newPos).attackedByWhite)
            ) {
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