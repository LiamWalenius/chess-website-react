import Piece from "./piece.ts"
import Knight from "./knight.ts"
import Rook from "./rook.ts"
import Bishop from "./bishop.ts"
import Queen from "./queen.ts"
import King from "./king.ts"
import Pawn from "./pawn.ts"

class Chess {
    static readonly size = 8
    board: Chess.Square[][]
    pieces: Piece[]

    constructor() {
        this.board = []

        for (let i = 0; i < Chess.size; i++) {
            let row = []

            for (let j = 0; j < Chess.size; j++) {
                row.push(Chess.Square.Empty)
            }

            this.board.push(row)
        }


        this.pieces = []

        const addPiece = (piece: Piece) => {
            this.pieces.push(piece)
            this.board[piece.pos.r][piece.pos.c] = Chess.Square.Occupied
        }

        addPiece(new Rook({r: 0, c: 0}, Piece.Team.Black))
        addPiece(new Knight({r: 0, c: 1}, Piece.Team.Black))
        addPiece(new Bishop({r: 0, c: 2}, Piece.Team.Black))
        addPiece(new Queen({r: 0, c: 3}, Piece.Team.Black))
        addPiece(new King({r: 0, c: 4}, Piece.Team.Black))
        addPiece(new Bishop({r: 0, c: 5}, Piece.Team.Black))
        addPiece(new Knight({r: 0, c: 6}, Piece.Team.Black))
        addPiece(new Rook({r: 0, c: 7}, Piece.Team.Black))

        for (let i = 0; i < Chess.size; i++) {
            addPiece(new Pawn({r: 1, c: i}, Piece.Team.Black))
            addPiece(new Pawn({r: 6, c: i}, Piece.Team.White))
        }

        addPiece(new Rook({r: 7, c: 0}, Piece.Team.White))
        addPiece(new Knight({r: 7, c: 1}, Piece.Team.White))
        addPiece(new Bishop({r: 7, c: 2}, Piece.Team.White))
        addPiece(new Queen({r: 7, c: 3}, Piece.Team.White))
        addPiece(new King({r: 7, c: 4}, Piece.Team.White))
        addPiece(new Bishop({r: 7, c: 5}, Piece.Team.White))
        addPiece(new Knight({r: 7, c: 6}, Piece.Team.White))
        addPiece(new Rook({r: 7, c: 7}, Piece.Team.White))
    }
}

namespace Chess {
    export enum Square {
        Empty,
        Occupied
    }
}

export default Chess