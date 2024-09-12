import {ChessBoard} from '.'
import { Chess } from '../chess'
import { useState } from 'react'

function ChessGame() {
    const [chess] = useState(new Chess())
    const [board, setBoard] = useState(chess.board)

    const selectSquare = (ind: number) => {
        chess.selectSquare(ind)
        setBoard(chess.getCopyOfBoard())
    }

    return (
        <div>
            <ChessBoard board={board} selectSquare={selectSquare}></ChessBoard>
        </div>
    )
}

export default ChessGame