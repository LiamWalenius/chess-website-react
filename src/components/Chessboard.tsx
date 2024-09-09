import { Square } from '.'

const Chessboard = () => {
    const size = 8;
    let cells = [];

    for (let i = 0; i < size * size; i++) {
        const x = i % size;
        const y = Math.floor(i / size);
        const isBlack = (x + y) % 2 === 1;

        cells.push(
            Square({key: i, isBlack})
        );
    }

    return (
        <div id="chessboard">
            {cells}
        </div>
    );
};

export default Chessboard;
