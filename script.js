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

    // add moves to each square node:
    squares.forEach(square => {
        if ((square.x - 1) >= 0 && (square.y + 2) <= 7) {
            square.moves.push(findSquare((square.x - 1), (square.y + 2)));
        }
        if ((square.x + 1) <= 7 && (square.y + 2) <= 7) {
            square.moves.push(findSquare((square.x + 1), (square.y + 2)));
        }
        if ((square.x - 2) >= 0 && (square.y + 1) <= 7) {
            square.moves.push(findSquare((square.x - 2), (square.y + 1)));
        }
        if ((square.x + 2) <= 7 && (square.y + 1) <= 7) {
            square.moves.push(findSquare((square.x + 2), (square.y + 1)));
        }
        if ((square.x - 2) >= 0 && (square.y - 1) >= 0) {
            square.moves.push(findSquare((square.x - 2), (square.y - 1)));
        }
        if ((square.x + 2) <= 7 && (square.y - 1) >= 0) {
            square.moves.push(findSquare((square.x + 2), (square.y - 1)));
        }
        if ((square.x - 1) >= 0 && (square.y - 2) >= 0) {
            square.moves.push(findSquare((square.x - 1), (square.y - 2)));
        }
        if ((square.x + 1) <= 7 && (square.y - 2) >= 0) {
            square.moves.push(findSquare((square.x + 1), (square.y - 2)));    
        }
    });

    // default knight position:
    let knight = [0, 0];

    function knightMoves(start, end) {
        let pathIdentified = false;
        const startSquare = findSquare(start[0], start[1]);
        const endSquare = findSquare(end[0], end[1]);
        let path = [startSquare];
        for (let counter = 0; counter < 7; counter++) {

        }
        function knightMovesRec(start, end, counter, path) {
            
        }

    }

    // function knightMoves(start, end) {
    //     let squareFound = false;

    //     function knightMovesRecursion(start, end, counter = 1, path = [findSquare(start[0], start[1])]) {

    //         const startSquare = findSquare(start[0], start[1]);
    //         const endSquare = findSquare(end[0], end[1]);
    //         startSquare.moves.forEach(move => {
    //             if (move === endSquare) {
    //                 squareFound = true;
    //                 path.push(endSquare);
    //                 if (counter === 1) {
    //                     console.log(`You made it in ${counter} move. Your path was:`);
    //                 } else {
    //                     console.log(`You made it in ${counter} moves. Your path was:`);
    //                 }
    //                 path.forEach(move => {
    //                     console.log(move.x + ', ' + move.y);
    //                 });
    //                 return;
    //             } else if (counter < 5 && squareFound === false) {
    //                 counter = counter + 1;
    //                 path.push(move);
    //                 knightMovesRecursion([move.x, move.y], [endSquare.x, endSquare.y], counter, path);
    //             }
    //         });
    //     };

    //     knightMovesRecursion(start, end);
    
    // }

    return { squares, knight, findSquare, knightMoves }
}

// each square has an x coordinate value, a y coordinate value, 
// and a 'moves' array which will contain a list of the squares to which the knight can travel:
const square = (x, y) => {
    let moves = [];

    return { x, y, moves }
}

const myBoard = board();

myBoard.knightMoves([0,0], [1, 2]);