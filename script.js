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

    // add possible moves to each square node:
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


    function knightMoves(start, end) {

        // find the actual squares based on the input coordinates:
        const startingSquare = findSquare(start[0], start[1]);
        const endingSquare = findSquare(end[0], end[1]);

        // create a set to track which squares have been visited 
        // & ensure the knight doesn't go back to them:
        const visitedSquares = new Set();

        // the main search loop...
        // it uses a breadth-first approach to queue up squares that have not yet been visited:
        search: {
            let queue = [];
            queue.push(startingSquare);
            while (queue.length > 0) {
                // the currentSquare is taken from the front of the queue:
                let currentSquare = queue.shift();
                // the currentSquare is added to the visitedSquares set to ensure it doesn't get visited again:
                visitedSquares.add(currentSquare);
                // check if the currentSquare's possible moves include the target endingSquare;
                // if they do, set the endingSquare's previousSquare property to the currentSquare, then shut down the search:
                if (currentSquare.moves.includes(endingSquare)) {
                    endingSquare.previousSquare = currentSquare;
                    break search;
                } else {
                    // otherwise, iterate through all of the moves available from the currentSquare...
                    currentSquare.moves.forEach(move => {
                        // only queue up squares that have not yet been visited:
                        if (!visitedSquares.has(move)) {
                            // set the next square's previousSquare property to the currentSquare:
                            move.previousSquare = currentSquare;
                            // logic to prioritize moves which have a move that leads directly to endingSquare:
                            if (move.moves.includes(endingSquare)) {
                                queue.unshift(move);
                            } else {
                                queue.push(move);
                            }
                        }
                    });
                }
            }
        }

        recordPath(startingSquare, endingSquare);

        clearPreviousSquares();

    }

    // method to record the successful path using the visited squares' previousSquare values:
    function recordPath(startingSquare, endingSquare) {
        let path = [];
        let currentSquare = endingSquare;
        while (currentSquare !== startingSquare) {
            path.unshift(currentSquare);
            currentSquare = currentSquare.previousSquare;
        }
        path.unshift(startingSquare);
        if (path.length === 2) {
            console.log(`You made it from [${startingSquare.x}, ${startingSquare.y}] to [${endingSquare.x}, ${endingSquare.y}] in ${path.length - 1} move!`);
        } else {
            console.log(`You made it from [${startingSquare.x}, ${startingSquare.y}] to [${endingSquare.x}, ${endingSquare.y}] in ${path.length - 1} moves!`);
        }
        console.log('Your path was:');
        path.forEach(move => {
            if (move === startingSquare) {
                console.log(`START:   ${move.x}, ${move.y}`);
            } else if (move === endingSquare) {
                console.log(`  END:   ${move.x}, ${move.y}`);
            } else {
                console.log(`         ${move.x}, ${move.y}`);
            }
        })
    }

    // clears out the previousSquare values from all the squares on the board:
    function clearPreviousSquares() {
        squares.forEach(square => {
            square.previousSquare = null;
        })
    }

    return { knightMoves }
}

// each square has an x coordinate value, a y coordinate value, 
// a 'moves' array which will contain links to the squares to which the knight can travel,
// and a previousSquare property to record the knight's eventual path:
const square = (x, y) => {
    let moves = [];
    let previousSquare = null;
    return { x, y, moves, previousSquare }
}

const myBoard = board();

myBoard.knightMoves([3, 3], [7, 0]);