import { Square } from '.'
import { Chess } from '../chess'
import { useState } from 'react'

const Chessboard = () => {
    const [game, setBoard] = useState(new Chess())
    const size = 8
    let cells = []

    for (let i = 0; i < size * size; i++) {
        const x = i % size
        const y = Math.floor(i / size)
        const isBlack = (x + y) % 2 === 1

        const piece = game.board.squareAt(game.indexToPosition(i)).piece

        const symbol = (piece !== null) ? piece.getSymbol() : ''

        cells.push(
            Square({key: i, isBlack, piece: symbol, game})
        )
    }

    return (
        <div id="chessboard">
            {cells}
        </div>
    )
}

export default Chessboard