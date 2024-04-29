import Piece from "./piece.ts"
import Chess from "./chess.ts"

class Bishop extends Piece {
    static dirs = [[-1, -1], [1, -1], [1, 1], [-1, 1]]

    calculateMoves(board: Piece[][]): Position[] {
        let possibleMoves = []

        for (const dir of Bishop.dirs) {
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

export default Bishop