/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  // Create a boolean array to mark numbers as prime or composite
  var isPrime = new Array(n).fill(true);
  
  // Initialize the counter of prime numbers
  var count = 0;
  
  // Iterate from 2 to n (exclusive)
  for (var i = 2; i < n; i++) {
    if (isPrime[i]) {
      // If the current number is prime, increment the count
      count++;
      
      // Mark all multiples of the current prime as composite
      for (var j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  
  return count;
};
