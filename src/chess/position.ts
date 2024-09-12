type Position = {
    r: number
    c: number
}

namespace Position {
    export function areEqual(a: Position, b: Position) {
        return a.r === b.r && a.c === b.c
    }
}

export default Position