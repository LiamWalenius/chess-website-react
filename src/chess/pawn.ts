import FixedMovePiece from "./fixed-move-piece.ts"
import Chess from "./chess.ts"

class Pawn extends FixedMovePiece {
    hasMoved: boolean = false

    override getMoves(): Position[] {
        let moves = [{r: 0, c: -1}]

        if (!this.hasMoved) {
            moves.push({r: 0, c: -2})
        }

        switch (this.team){
            case Chess.Team.White:
                return moves
            case Chess.Team.Black:
                for (let move of moves) {
                    move.c *= -1
                }

                return moves
        }
    }

    override calculateMoves(board: Chess.Board): Position[] {
        let possibleMoves = super.calculateMoves(board)

        const capturePositions = [{r: -1, c: -1}, {r: 1, c: -1}]
        for (const cap of capturePositions) {
            const newPos = {
                r: this.pos.r + cap.r,
                c: this.pos.c + ((this.team == Chess.Team.White) ? cap.c : -cap.c)
            }

            if (!board.posInBoard(newPos)) {
                continue
            }

            const piece = board.squareAt(newPos).piece
            if (piece === null) {
                continue
            }

            if (piece.team !== this.team) {
                possibleMoves.push(newPos)
            }
        }

        return possibleMoves
    }
}

export default Pawn