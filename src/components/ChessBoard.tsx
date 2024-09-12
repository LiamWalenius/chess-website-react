import { Square } from './index.ts'
import { Chess } from '../chess'

type Props = {
    board: Chess.Board
    selectSquare: (ind: number) => void
}

function ChessBoard ({board, selectSquare}: Props) {
    const size = board.size
    let cells = []

    for (let i = 0; i < size * size; i++) {
        const x = i % size
        const y = Math.floor(i / size)
        const isBlack = (x + y) % 2 === 1

        const piece = board.squareAt(board.indexToPosition(i)).piece
        const symbol = (piece !== null) ? piece.getSymbol() : ''

        cells.push(
            Square({key: i, isBlack, piece: symbol, selectSquare})
        )
    }

    return (
        <div id="chessboard">
            {cells}
        </div>
    )
}

export default ChessBoard