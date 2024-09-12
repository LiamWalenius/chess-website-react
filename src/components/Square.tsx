import { Button } from '.'

type Props = {
    key: number
    isBlack: boolean
    piece: string
    onClick: (ind: number) => void
}

const Square = ({key, isBlack, piece, onClick}: Props) => {
    return (
        <div
            key={key}
            className={`cell ${isBlack ? 'black' : 'white'}`}
        >
            {<Button onClick={() => onClick(key)}>{piece}</Button>}
        </div>
    )
}

export default Square