import { Chess, Position } from './index.ts'

abstract class Piece {
    pos: Position
    team: Chess.Team
    moves: Position[] = []

    constructor(pos: Position, team: Chess.Team) {
        this.pos = pos
        this.team = team
    }

    abstract calculateMoves(board: Chess.Board): Position[]

    abstract getSymbol(): string
}

export default Piece