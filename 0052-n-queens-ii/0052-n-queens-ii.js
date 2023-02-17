/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    const board = new Array(n).fill(0).map(() => new Array(n).fill('.'));
    let count = 0;
    const isValid = (row, col) => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    }
    const helper = (row) => {
        // base case
        if (row === n) {
            count++;
            return;
        }
        // recursive case
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                helper(row + 1);
                board[row][col] = '.';
            }
        }
    }
    helper(0);
    return count;
}