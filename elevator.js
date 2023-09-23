/**
 * Remove duplicate items from an array
 * @param {Array} arr
 * @returns {Array}
 */
function uniq(arr) {
    return arr.reduce((prev, curr) => {
        if (prev.indexOf(curr) === -1) {
            prev = prev.concat(curr);
        }
        return prev;
    }, []);
}
/**
 * Solution to our problem
 *
 * @param {Array.<Number>}  A Array of passengers weights
 * @param {Array.<Number>}  B Array of passenger destination floors
 * @param {Number}          M Number of floors in the building
 * @param {Number}          X Elevator max passenger capacity
 * @param {Number}          Y Elevator max weight capacity
 * @returns {Number}        Number of total stops
 */
function solution(A, B, M, X, Y) {
    let trip = 0,
        tripWeight = 0,
        rounds = [];
    for (let i = 0, len = A.length; i < len; i += 1) {
        // If there's an unclosed trip, let’s see if we can get more people in
        if (typeof rounds[trip] !== 'undefined') {
            // Check if we have filled the capacity for the current trip,
            // if so, then close the existing trip and create a new one
            if (rounds[trip].length === X || tripWeight + A[i] > Y) {
                // Increase trip count
                trip++;
                // Reset current weight
                tripWeight = 0;
            }
        }
        // Create an empty array for the current trip
        rounds[trip] = rounds[trip] || [];
        // Push passengers destination to current trip
        rounds[trip].push(B[i]);
        // Increase current load
        tripWeight += A[i];
    }
    // Remove duplicate floors from each trip, since
    // the elevator will make 1 stop for pessengers that
    // go to the same floor. Then add 1 (return to ground floor)
    rounds = rounds.map(round => uniq(round).length + 1);
    // To get number of total stops, we sum up
    // destination count in each trip.
    return rounds.reduce((prev, curr) => prev + curr, 0);
}

console.log(
    solution(
        [60, 80, 40],   // Weights
        [2, 3, 5],      // Destinations
        5,              // Floors
        2,              // Max passengers
        200             // Max weight
    )
); // -> 5

console.log(
    solution(
        [150, 200, 120, 80, 180, 170],
        [2, 3, 5, 2, 4, 4],
        6,
        2,
        400
    )
); // -> 8

console.log(
    solution(
        [100, 300, 80, 100, 120, 160, 120, 250, 180, 120],
        [6, 2, 2, 5, 3, 4, 6, 2, 5, 4],
        7,
        4,
        600
    )
); // -> 12
