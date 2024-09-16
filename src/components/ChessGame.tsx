import { ChessBoard } from './index.ts'
import { Chess } from '../chess'
import { useState } from 'react'

function ChessGame() {
    const [chess] = useState(new Chess())
    const [board, setBoard] = useState(chess.getCopyOfBoard())

    const selectSquare = (ind: number) => {
        chess.selectSquare(ind)
        setBoard(chess.getCopyOfBoard())
    }

    return (
        <div>
            <ChessBoard board={board} possibleMoves={[0, 1, 2, 3, 4, 5]} selectSquare={selectSquare}/>
        </div>
    )
}

export default ChessGame