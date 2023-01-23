/**
 * @param {number} n
 * @return {bool}
 */
var isSquare = function(n) {
    return Math.sqrt(n) % 1 === 0;
}

/**
 * @param {number} n
 * @return {number}
 */

var numSquares = function(n) {
    if (isSquare(n)) {
        // Check if n is a square number
        return 1;
    }
    // Stategy is based on Lagrange's four-square theorem
    // Every natural number can be represented as the sum of four integer squares
    // https://en.wikipedia.org/wiki/Lagrange%27s_four-square_theorem
    let sq = Number(Math.sqrt(n));
    let multiple = n;
    // check if n is a multiple of 4
    while (multiple % 4 == 0) multiple /= 4;
    if (multiple % 8 == 7) return 4;
    
    for (let i = 1; i <= sq; i++) {
        if (isSquare(n - i * i)) return 2;
    }
    return 3;
};
