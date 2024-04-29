import Piece from "./piece.ts"
import Chess from "./chess.ts"

class Rook extends Piece {
    static dirs = [[0, -1], [0, 1], [-1, 0], [1, 0]]

    calculateMoves(board: Piece[][]): Position[] {
        let possibleMoves = []

        for (const dir of Rook.dirs) {
            for (let pos = this.location; pos.r < Chess.size && pos.c < Chess.size; pos.r += dir[0], pos.c += dir[1]) {
                if (board[pos.r][pos.c] !== null) {
                    break
                }

                possibleMoves.push(pos)
            }
        }

        return possibleMoves
    }
}

export default Rook