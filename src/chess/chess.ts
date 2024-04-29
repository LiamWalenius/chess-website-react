import Piece from "./piece.ts"
import Knight from "./knight.ts"
import Rook from "./rook.ts"
import Bishop from "./bishop.ts"
import Queen from "./queen.ts"
import King from "./king.ts"

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

        this.board[0][0] = new Rook({r: 0, c: 0})
        this.board[0][1] = new Knight({r: 0, c: 1})
        this.board[0][2] = new Bishop({r: 0, c: 2})
        this.board[0][3] = new Queen({r: 0, c: 3})
        this.board[0][4] = new King({r: 0, c: 4})
        this.board[0][5] = new Bishop({r: 0, c: 5})
        this.board[0][6] = new Knight({r: 0, c: 6})
        this.board[0][7] = new Rook({r: 0, c: 7})

        this.board[7][0] = new Rook({r: 7, c: 0})
        this.board[7][1] = new Knight({r: 7, c: 1})
        this.board[7][2] = new Bishop({r: 7, c: 2})
        this.board[7][3] = new Queen({r: 7, c: 3})
        this.board[7][4] = new King({r: 7, c: 4})
        this.board[7][5] = new Bishop({r: 7, c: 5})
        this.board[7][6] = new Knight({r: 7, c: 6})
        this.board[7][7] = new Rook({r: 7, c: 7})
    }
}

export default Chess