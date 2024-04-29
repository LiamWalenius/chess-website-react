import Piece from "./piece.ts"
import Knight from "./knight.ts"

class Chess {
    static size = 8
    board: (Piece | null)[][]

    constructor() {
        this.board = []

        for (let i = 0; i < Chess.size; i++) {
            let row = []

            for (let j = 0; j < Chess.size; j++) {
                row.push(null)
            }

            this.board.push(row)
        }

        this.board[0][1] = new Knight(new Point(0, 1))
    }
}

export default Chess