import Chess from "./chess.ts"

abstract class Piece {
    pos: Position
    team: Piece.Team

    constructor(location: Position, team: Piece.Team) {
        this.pos = location
        this.team = team
    }

    abstract calculateMoves(board: Chess.Square[][]): Position[]
}

namespace Piece {
    export enum Team {
        White,
        Black
    }
}

export default Piece