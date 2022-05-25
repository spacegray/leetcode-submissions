/**
 * @param {number} n
 * @return {number}
 
 Recursive Solution with memoization
 */


var climbStairs = function (n, memo = []) {
  if (n < 3) return n;
    
  if (memo[n]) return memo[n];


  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[n];
};
