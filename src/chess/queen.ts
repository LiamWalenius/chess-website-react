import Piece from "./piece.ts"
import Chess from "./chess.ts"

class Queen extends Piece {
    static readonly dirs = [[0, -1], [0, 1], [-1, 0], [1, 0], [-1, -1], [1, -1], [1, 1], [-1, 1]]

    calculateMoves(board: Chess.Square[][]): Position[] {
        let possibleMoves = []

        for (const dir of Queen.dirs) {
            for (let newPos = this.pos; newPos.r < Chess.size && newPos.c < Chess.size; newPos.r += dir[0], newPos.c += dir[1]) {
                if (board[newPos.r][newPos.c] == Chess.Square.Occupied) {
                    break
                }

                possibleMoves.push(newPos)
            }
        }

        return possibleMoves
    }
}

export default Queen