import Piece from './piece.ts'
import { Chess, Position } from './index.ts'

abstract class LinearMovePiece extends Piece {
    abstract getDirs(): Position[]

    override calculateMoves(board: Chess.Board): Position[] {
        let possibleMoves = []

        for (const dir of this.getDirs()) {
            console.log(dir)
            for (let newPos = {...this.pos}; board.posInBoard(newPos); newPos.r += dir.r, newPos.c += dir.c) {
                console.log(`${this.getSymbol()}: (${newPos.r}, ${newPos.c})`)
                const piece = board.squareAt(newPos).piece

                if (piece !== null) {
                    if (this.team != piece.team) {
                        possibleMoves.push(newPos)
                    }

                    break
                }

                possibleMoves.push(newPos)
            }
        }

        return possibleMoves
    }
}

export default LinearMovePiece