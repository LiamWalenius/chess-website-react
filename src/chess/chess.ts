import Piece from "./piece.ts"
import Horse from "./horse.ts"
import Rook from "./rook.ts"
import Bishop from "./bishop.ts"
import Queen from "./queen.ts"
import King from "./king.ts"
import Pawn from "./pawn.ts"

class Chess {
    board = new Chess.Board()
    pieces = new Set<Piece>()
    selectedPiece: Piece | null = null
    turn = Chess.Team.White

    constructor() {
        const addPiece = (piece: Piece) => {
            this.pieces.add(piece)
            this.board.squareAt(piece.pos).piece = piece
        }

        const addPieceRow = (team: Chess.Team, row: number) => {
            addPiece(new Rook({r: row, c: 0}, team))
            addPiece(new Horse({r: row, c: 1}, team))
            addPiece(new Bishop({r: row, c: 2}, team))
            addPiece(new Queen({r: row, c: 3}, team))
            addPiece(new King({r: row, c: 4}, team))
            addPiece(new Bishop({r: row, c: 5}, team))
            addPiece(new Horse({r: row, c: 6}, team))
            addPiece(new Rook({r: row, c: 7}, team))
        }

        addPieceRow(Chess.Team.Black, 0)
        addPieceRow(Chess.Team.White, 7)

        for (let i = 0; i < this.board.size; i++) {
            addPiece(new Pawn({r: 1, c: i}, Chess.Team.Black))
            addPiece(new Pawn({r: 6, c: i}, Chess.Team.White))
        }
    }

    selectSquare(pos: Position): void {
        this.selectedPiece = this.board.squareAt(pos).piece
    }

    moveSelectedPiece(pos: Position): void {
        if (this.selectedPiece === null) {
            return
        }

        const piece = this.board.squareAt(pos).piece

        if (piece !== null) {
            this.pieces.delete(piece)
        }

        this.board.squareAt(this.selectedPiece.pos).piece = null
        this.board.squareAt(pos).piece = this.selectedPiece
        this.selectedPiece.pos = pos

        this.endTurn()
    }

    endTurn(): void {
        this.turn = (this.turn + 1) % 2

        for (const piece of this.pieces) {
            for (const move of piece.calculateMoves(this.board)) {
                switch (piece.team) {
                    case Chess.Team.White:
                        this.board.squareAt(move).attackedByWhite = true
                        break
                    case Chess.Team.Black:
                        this.board.squareAt(move).attackedByBlack = true
                        break
                }
            }
        }
    }
}

namespace Chess {
    export enum Team {
        White,
        Black
    }

    class Square {
        attackedByWhite = false
        attackedByBlack = false
        piece: Piece | null = null
    }

    export class Board {
        readonly size = 8
        board: Square[][] = []

        constructor() {
            for (let i = 0; i < this.size; i++) {
                let row = []

                for (let j = 0; j < this.size; j++) {
                    row.push(new Square())
                }

                this.board.push(row)
            }
        }

        squareAt(pos: Position): Square {
            return this.board[pos.r][pos.c]
        }

        posInBoard(pos: Position): boolean {
            return pos.r >= 0 && pos.r < this.size && pos.c >= 0 && pos.c < this.size
        }
    }
}

export default Chess