import { Button } from '.'
import { Chess } from '../chess'

interface Props {
    key: number
    isBlack: boolean
    piece: string
    game: Chess
}

const Square = ({key, isBlack, piece, game}: Props) => {
    const onClick = () => {
        game.selectSquare(key)
        game.printBoard()
    }

    return (
        <div
            key={key}
            className={`cell ${isBlack ? 'black' : 'white'}`}
        >
            {<Button onClick={onClick}>{piece}</Button>}
        </div>
    )
}

export default Square