const board = () => {

    // create a gameboard with 64 squares...
    let squares = [];
    for (x = 0; x <= 7; x++) {
        for (y = 0; y <= 7; y++) {
            const newSquare = square(x, y);
            squares.push(newSquare);
        }
    }

    // method to find a square from its x & y coordinates:
    function findSquare(x, y) {
        let targetSquare;
        squares.forEach(square => {
            if (square.x === x && square.y === y) {
                targetSquare = square;
            }
        });
        return targetSquare;
    }

    // default knight position:
    let knight = [0, 0];

    return { squares, knight, findSquare }
}

// each square has an x coordinate value, a y coordinate value, 
// and a 'paths' array which will contain a list of the squares to which the knight can travel:
const square = (x, y) => {
    let paths = [];


    // if ((x - 1) >= 0 && (y + 2) <= 7) {
    //     paths.push([x - 1, y + 2]);
    // }
    // if ((x + 1) <= 7 && (y + 2) <= 7) {
    //     paths.push([x + 1, y + 2]);
    // }
    // if ((x - 2) >= 0 && (y + 1) <= 7) {
    //     paths.push([x - 2], [y + 1]);
    // }
    // if ((x + 2) <= 7 && (y + 1) <= 7) {
    //     paths.push([x + 2, y + 1]);
    // }
    // if ((x - 2) >= 0 && (y - 1) >= 0) {
    //     paths.push([x - 2, y - 1]);
    // }
    // if ((x + 2) <= 7 && (y - 1) >= 0) {
    //     paths.push([x + 2, y - 1]);
    // }
    // if ((x - 1) >= 0 && (y - 2) >= 0) {
    //     paths.push([x - 1, y - 2]);
    // }
    // if ((x + 1) <= 7 && (y - 2) >= 0) {
    //     paths.push([x + 1, y - 2]);    
    // }

    return { x, y, paths }
}

function knightMoves(start, end) {

}


const myBoard = board();
console.log(myBoard.squares);
const mySquare = myBoard.findSquare(4, 4);
console.log(mySquare)