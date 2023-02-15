/**
 * @param {number[][]} triangle
 * @return {number}
 */
/*  My strategy: 
    - I used a memoization table to store the minimum path sum from each cell to the bottom of the triangle
    - Created helper function to recursively calculate the minimum path sum from each cell to the bottom of the triangle
    - Base case: if we are at the bottom of the triangle, return 0
    - Recursive case:
        - (left) Calculate the minimum path sum from the cell below the current cell to the bottom of the triangle
        - (right) Calculate the minimum path sum from the cell below and to the right of the current cell to the bottom of the triangle
        - Return the minimum of the two sums plus the value of the current cell
    - Store the result in the memoization table
    - Return the minimum path sum from the top of the triangle to the bottom
*/
var helper = function(triangle, row, col, memo) {
    // base case
    if (row === triangle.length) {
        return 0;
    }
    // check memo 
    if (memo[row][col] !== undefined) {
        return memo[row][col];
    }
    // recursive case
    const left = helper(triangle, row + 1, col, memo);
    const right = helper(triangle, row + 1, col + 1, memo);
    // store in memo
    memo[row][col] = Math.min(left, right) + triangle[row][col];
    return memo[row][col];
}
var minimumTotal = function(triangle) {
    const memo = new Array(triangle.length);
    for (let i = 0; i < triangle.length; i++) {
        memo[i] = new Array(triangle[i].length);
    }
    return helper(triangle, 0, 0, memo);  
};
