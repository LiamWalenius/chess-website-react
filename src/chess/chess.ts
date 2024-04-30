import Piece from "./piece.ts"
import Horse from "./horse.ts"
import Rook from "./rook.ts"
import Bishop from "./bishop.ts"
import Queen from "./queen.ts"
import King from "./king.ts"
import Pawn from "./pawn.ts"

class Chess {
    static readonly size = 8
    board: Chess.Square[][] = []
    pieces: Set<Piece> = new Set<Piece>()
    selectedPiece: Piece | null = null

    constructor() {
        for (let i = 0; i < Chess.size; i++) {
            let row = []

            for (let j = 0; j < Chess.size; j++) {
                row.push(new Chess.Square())
            }

            this.board.push(row)
        }

        const addPiece = (piece: Piece) => {
            this.pieces.add(piece)
            this.board[piece.pos.r][piece.pos.c].piece = piece
        }

        const addPieceRow = (team: Piece.Team, row: number) => {
            addPiece(new Rook({r: row, c: 0}, team))
            addPiece(new Horse({r: row, c: 1}, team))
            addPiece(new Bishop({r: row, c: 2}, team))
            addPiece(new Queen({r: row, c: 3}, team))
            addPiece(new King({r: row, c: 4}, team))
            addPiece(new Bishop({r: row, c: 5}, team))
            addPiece(new Horse({r: row, c: 6}, team))
            addPiece(new Rook({r: row, c: 7}, team))
        }

        addPieceRow(Piece.Team.Black, 0)
        addPieceRow(Piece.Team.White, 7)

        for (let i = 0; i < Chess.size; i++) {
            addPiece(new Pawn({r: 1, c: i}, Piece.Team.Black))
            addPiece(new Pawn({r: 6, c: i}, Piece.Team.White))
        }
    }

    static posInBoard(pos: Position): boolean {
        return pos.r >= 0 && pos.r < Chess.size && pos.c >= 0 && pos.c < Chess.size
    }

    selectSquare(pos: Position): void {
        if (this.board[pos.r][pos.c].isEmpty()) {
            return
        }

        for (const piece of this.pieces) {
            if (piece.pos === pos) {
                this.selectedPiece = piece;
                break
            }
        }
    }

    moveSelectedPiece(pos: Position): void {
        if (this.selectedPiece === null) {
            return
        }

        if (!this.board[pos.r][pos.c].isEmpty()) {
            this.pieces.delete(<Piece>this.board[pos.r][pos.c].piece)
        }

        this.board[this.selectedPiece.pos.r][this.selectedPiece.pos.c].piece = null
        this.board[pos.r][pos.c].piece = this.selectedPiece
    }
}

namespace Chess {
    export class Square {
        attackedByWhite: boolean = false
        attackedByBlack: boolean = false
        piece: Piece | null = null

        isEmpty(): boolean {
            return this.piece === null
        }
    }
}

export default Chess