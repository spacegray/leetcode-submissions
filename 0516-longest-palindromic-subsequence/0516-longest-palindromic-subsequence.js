/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  const n = s.length;
  
  // Initialize a 2D array with all values set to 0
  const dp = Array(n).fill(null).map(() => Array(n).fill(0));
  
  // Set the diagonal values of the array to 1,
  // since a single character is always a palindrome of length 1
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }
  
  // Iterate through the 2D array and fill in values 
  // from the bottom up, left to right
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (s.charAt(i) === s.charAt(j)) {
        // If the characters at positions i and j match,
        // then the length of the longest palindromic subsequence
        // is the length of the longest palindromic subsequence
        // of the substring from i+1 to j-1, plus 2
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        // If the characters at positions i and j do not match,
        // then the length of the longest palindromic subsequence
        // is the maximum of the length of the longest palindromic
        // subsequence of the substring from i to j-1 and the substring
        // from i+1 to j
        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
      }
    }
  }
  
  // Return the value in the top-right corner of the 2D array
  // which represents the length of the longest palindromic subsequence
  return dp[0][n - 1];
};
