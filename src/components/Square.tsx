import { Button } from '.'

interface Props {
    key: number
    isBlack: boolean
}

const Square = ({key, isBlack}: Props) => {
    return (
        <div
            key={key}
            className={`cell ${isBlack ? 'black' : 'white'}`}
        >
            {<Button onClick={() => console.log('sigma')}>{''}</Button>}
        </div>
    )
}

export default Square