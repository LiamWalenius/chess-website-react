import Piece from './piece.ts'
import Knight from './knight.ts'
import Rook from './rook.ts'
import Bishop from './bishop.ts'
import Queen from './queen.ts'
import King from './king.ts'
import Pawn from './pawn.ts'
import { Position } from './index.ts'

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
            addPiece(new Knight({r: row, c: 1}, team))
            addPiece(new Bishop({r: row, c: 2}, team))
            addPiece(new Queen({r: row, c: 3}, team))
            addPiece(new King({r: row, c: 4}, team))
            addPiece(new Bishop({r: row, c: 5}, team))
            addPiece(new Knight({r: row, c: 6}, team))
            addPiece(new Rook({r: row, c: 7}, team))
        }

        addPieceRow(Chess.Team.Black, 0)
        addPieceRow(Chess.Team.White, 7)

        for (let i = 0; i < this.board.size; i++) {
            addPiece(new Pawn({r: 1, c: i}, Chess.Team.Black))
            addPiece(new Pawn({r: 6, c: i}, Chess.Team.White))
        }

        for (const piece of this.pieces) {
            piece.moves = piece.calculateMoves(this.board)
        }
    }

    selectSquare(ind: number): void {
        const pos = this.board.indexToPosition(ind)
        const piece = this.board.squareAt(pos).piece

        if (this.selectedPiece === null) {
            if (piece === null) {
                return
            }
            if (piece.team === this.turn) {
                this.selectedPiece = piece
            }
        }
        else {
            if (piece === null || piece.team !== this.turn) {
                if (this.selectedPiece.moves.some((p) => Position.areEqual(p, pos))) {
                    this.moveSelectedPiece(pos)
                    return
                }
            }
            else {
                this.selectedPiece = piece
                console.log(this.selectedPiece.moves)
            }
        }
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
        this.selectedPiece.hasMoved = true

        this.endTurn()
    }

    endTurn(): void {
        this.turn = (this.turn + 1) % 2
        this.selectedPiece = null

        for (const piece of this.pieces) {
            piece.moves = piece.calculateMoves(this.board)

            for (const move of piece.moves) {
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

    getCopyOfBoard(): Chess.Board {
        const newBoard = new Chess.Board()

        for (let r = 0; r < this.board.size; r++) {
            for (let c = 0; c < this.board.size; c++) {
                newBoard.board[r][c] = this.board.board[r][c]
            }
        }

        return newBoard
    }

    getSelectedPieceMoves(): Position[] {
        return (this.selectedPiece !== null) ? this.selectedPiece.moves : []
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
        
        indexToPosition(ind: number): Position {
            const r = Math.floor(ind / this.size)
            const c = ind % this.size

            return {r, c}
        }

        positionToIndex(pos: Position): number {
            return pos.r*this.size + pos.c
        }
    }
}

export default Chess