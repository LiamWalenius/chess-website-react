import { Button } from '.'

type Props = {
    key: number
    isBlack: boolean
    piece: string
    selectSquare: (ind: number) => void
}

function Square ({key, isBlack, piece, selectSquare}: Props) {
    return (
        <div
            key={key}
            className={`cell ${isBlack ? 'black' : 'white'}`}
        >
            {<Button onClick={() => selectSquare(key)}>{piece}</Button>}
        </div>
    )
}

export default Square