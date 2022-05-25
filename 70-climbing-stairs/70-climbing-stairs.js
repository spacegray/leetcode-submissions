/**
 * @param {number} n
 * @return {number}
 */

/* 

Initialize a result variable equal to 0;
Then we would check if n is odd or even
if even, iterate from 1 to n.lengh, increment by 2
increment result by one for each step

else



*/

var climbStairs = function (n, memo = []) {
  if (n < 3) return n;
    
  if (memo[n]) return memo[n];


  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[n];
};