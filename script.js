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

    // add paths to each square node:
    squares.forEach(square => {
        if ((square.x - 1) >= 0 && (square.y + 2) <= 7) {
            square.paths.push(findSquare((square.x - 1), (square.y + 2)));
        }
        if ((square.x + 1) <= 7 && (square.y + 2) <= 7) {
            square.paths.push(findSquare((square.x + 1), (square.y + 2)));
        }
        if ((square.x - 2) >= 0 && (square.y + 1) <= 7) {
            square.paths.push(findSquare((square.x - 2), (square.y + 1)));
        }
        if ((square.x + 2) <= 7 && (square.y + 1) <= 7) {
            square.paths.push(findSquare((square.x + 2), (square.y + 1)));
        }
        if ((square.x - 2) >= 0 && (square.y - 1) >= 0) {
            square.paths.push(findSquare((square.x - 2), (square.y - 1)));
        }
        if ((square.x + 2) <= 7 && (square.y - 1) >= 0) {
            square.paths.push(findSquare((square.x + 2), (square.y - 1)));
        }
        if ((square.x - 1) >= 0 && (square.y - 2) >= 0) {
            square.paths.push(findSquare((square.x - 1), (square.y - 2)));
        }
        if ((square.x + 1) <= 7 && (square.y - 2) >= 0) {
            square.paths.push(findSquare((square.x + 1), (square.y - 2)));    
        }
    })

    // default knight position:
    let knight = [0, 0];

    return { squares, knight, findSquare }
}

// each square has an x coordinate value, a y coordinate value, 
// and a 'paths' array which will contain a list of the squares to which the knight can travel:
const square = (x, y) => {
    let paths = [];

    return { x, y, paths }
}

function knightMoves(start, end) {

}


const myBoard = board();
console.log(myBoard.squares);
const mySquare = myBoard.findSquare(4, 4);
console.log(mySquare)