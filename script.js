const board = () => {

    let squares = [];
    for (x = 0; x <= 7; x++) {
        for (y = 0; y <= 7; y++) {
            const newSquare = square(x, y);
            squares.push(newSquare);
        }
    }

    // default knight position:
    let knight = [0, 0];

    return { squares, knight }
}

const square = (x, y) => {
    let paths = [];

    if ((x - 1) >= 0 && (y + 2) <= 7) {
        paths.push([x - 1, y + 2]);
    }
    if ((x + 1) <= 7 && (y + 2) <= 7) {
        paths.push([x + 1, y + 2]);
    }
    if ((x - 2) >= 0 && (y + 1) <= 7) {
        paths.push([x - 2], [y + 1]);
    }
    if ((x + 2) <= 7 && (y + 1) <= 7) {
        paths.push([x + 2, y + 1]);
    }
    if ((x - 2) >= 0 && (y - 1) >= 0) {
        paths.push([x - 2, y - 1]);
    }
    if ((x + 2) <= 7 && (y - 1) >= 0) {
        paths.push([x + 2, y - 1]);
    }
    if ((x - 1) >= 0 && (y - 2) >= 0) {
        paths.push([x - 1, y - 2]);
    }
    if ((x + 1) <= 7 && (y - 2) >= 0) {
        paths.push([x + 1, y - 2]);    
    }

    return { x, y, paths }
}

function knightMoves(start, end) {

}


const myBoard = board();
console.log(myBoard.squares);