import Piece from "./piece.ts"
import Chess from "./chess.ts"

class Horse extends Piece {
    static readonly moves = [[1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2]]

    calculateMoves(board: Chess.Square[][]): Position[] {
        let possibleMoves = []

        for (const move of Horse.moves) {
            const newPos = {r: this.pos.r + move[0], c: this.pos.c + move[1]}

            if (board[newPos.r][newPos.c] == Chess.Square.Empty) {
                possibleMoves.push(newPos)
            }
        }

        return possibleMoves
    }
}

export default Horse