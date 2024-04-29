import Piece from "./piece.ts"
import Chess from "./chess.ts"

class King extends Piece {
    static readonly dirs = [[0, -1], [0, 1], [-1, 0], [1, 0], [-1, -1], [1, -1], [1, 1], [-1, 1]]

    calculateMoves(board: Chess.Square[][]): Position[] {
        let possibleMoves = []

        for (const dir of King.dirs){
            const newPos = {r: this.pos.r + dir[0], c: this.pos.c + dir[1]}

            if (board[newPos.r][newPos.c] == Chess.Square.Empty) {
                possibleMoves.push(newPos)
            }
        }

        return possibleMoves
    }
}

export default King