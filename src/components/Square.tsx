import { Button } from './index.ts'

type Props = {
    key: number
    isBlack: boolean
    symbol: string
    isPossibleMove: boolean
    selectSquare: (ind: number) => void
}

function Square ({key, isBlack, symbol, isPossibleMove, selectSquare}: Props) {
    const circle = isPossibleMove ? <div className="circle">{symbol}</div> : <></>

    return (
        <div
            key={key}
            className={`cell ${isBlack ? 'black' : 'white'}`}
        >
            {<Button onClick={() => selectSquare(key)}>{circle}</Button>}
        </div>
    )
}

export default Square