import Chess from "./chess.ts"

abstract class Piece {
    pos: Position
    team: Chess.Team

    constructor(pos: Position, team: Chess.Team) {
        this.pos = pos
        this.team = team
    }

    abstract calculateMoves(board: Chess.Board): Position[]

    abstract getSymbol(): string
}

export default Piece