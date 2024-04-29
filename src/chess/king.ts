import Piece from "./piece.ts"

class King extends Piece {
    static dirs = [[0, -1], [0, 1], [-1, 0], [1, 0], [-1, -1], [1, -1], [1, 1], [-1, 1]]

    calculateMoves(board: Piece[][]): Position[] {
        let possibleMoves = []

        for (const dir of King.dirs){
            const newPos = {r: this.location.r + dir[0], c: this.location.c + dir[1]}

            if (board[newPos.r][newPos.c] !== null) {
                possibleMoves.push(newPos)
            }
        }

        return possibleMoves
    }
}

export default King