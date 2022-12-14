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
        const startingSquare = findSquare(start[0], start[1]);
        const endingSquare = findSquare(end[0], end[1]);
        let path = [];
        const visitedSquares = new Set();

        search: {
            let queue = [];
            let previousSquare = null;
            let currentSquare = null;
            queue.push(startingSquare);
            while (queue.length > 0) {
                previousSquare = currentSquare;
                currentSquare = queue.shift();
                visitedSquares.add(currentSquare);
                path.push([previousSquare, currentSquare]);
                if (currentSquare.moves.includes(endingSquare)) {
                    path.push([currentSquare, endingSquare]);
                    break search;
                } else {
                    currentSquare.moves.forEach(move => {
                        if (move.moves.includes(endingSquare)) {
                            queue.unshift(move);
                        }
                        move.moves.forEach(move => {
                            if (move.moves.includes(endingSquare)) {
                                queue.unshift(move);
                            }
                        });
                        
                        if (!visitedSquares.has(move)) {
                            queue.push(move);
                        }
                    });
                }
            }
        }

        console.log(visitedSquares)
        console.log(path);

    }











    // function knightMoves(start, end) {
    //     let startingSquare = findSquare(start[0], start[1]);
    //     let endingSquare = findSquare(end[0], end[1]);

    //     let pathIdentified = false;
    //     let finalPath = [];

    //     function knightMovesRec(start, path = [start]) {
    //         if (start === endingSquare) {
    //             finalPath = path;
    //             pathIdentified = true;
    //         } else if (start !== endingSquare) {
    //             start.moves.forEach(move => {
    //                 path.push(move);
    //                 knightMovesRec(move, path);
    //             });
    //         }
    //     }

    //     do {
    //         knightMovesRec(startingSquare);
    //     } while (pathIdentified === false);

    //     const moves = finalPath.length - 1;

    //     if (moves === 1) {
    //         console.log(`You made it in ${moves} move. Your path was:`);
    //     } else {
    //         console.log(`You made it in ${moves} moves. Your path was:`);
    //     }
    //     moves.forEach(move => {
    //         console.log(move.x + ', ' + move.y);
    //     });
    // }

    // function knightMoves(start, end) {

    //     let pathIdentified = false;
    //     const endSquare = findSquare(end[0], end[1]);  
    //     let counter = 0;

    //     while (counter < 7) {
    //         function knightMovesRec(start, path = [findSquare(start[0], start[1])]) {

    //             if (pathIdentified === true) return;
    
    //             const startSquare = findSquare(start[0], start[1]);
                
    //             startSquare.moves.forEach(move => {
    //                 path.push(move);
    //                 if (move === endSquare) {
    //                     pathIdentified = true;
    //                     if (counter === 1) {
    //                         console.log(`You made it in ${counter} move. Your path was:`);
    //                     } else {
    //                         console.log(`You made it in ${counter} moves. Your path was:`);
    //                     }
    //                     path.forEach(move => {
    //                         console.log(move.x + ', ' + move.y);
    //                     });
    //                     return;
    //                 } else {
    //                     counter++;
    //                     knightMovesRec([move.x, move.y], path)
    //                 }
    //             });
    //         }
    //         knightMovesRec(start, end);
            
    //     }

        

    // }

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

    // //     knightMovesRecursion(start, end);
    
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

myBoard.knightMoves([0,0], [7, 7]);