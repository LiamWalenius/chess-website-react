import {ChessBoard} from '.'
import { Chess } from '../chess'
import { useState } from 'react'

const ChessGame = () => {
    const [chess] = useState(new Chess())
    const [board, setBoard] = useState(chess.board)

    const selectSquare = (ind: number) => {
        chess.selectSquare(ind)
        setBoard(chess.getCopyOfBoard())
    }

    return (
        <div>
            <ChessBoard board={board} onClick={selectSquare}></ChessBoard>
        </div>
    )
}

export default ChessGame