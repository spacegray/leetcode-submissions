/**
 * @param {number[]} nums
 * @return {number}
 */

/*
Initialize a variable result to 0.
Iterate through all the elements in the array using a loop.
For each element, perform XOR (^) with the result variable.
Return the result variable as the output.
*/

var singleNumber = function(nums) {
  let result = 0;
  
  // XOR all elements in the array
  for (let num of nums) {
    result ^= num;
  }
  
  return result;
};

/* 
By performing XOR on all the elements, the pairs of elements that appear twice will cancel out each other, leaving only the element that appears once.

XOR is used to cancel out pairs of elements that appear twice. When XORing an element with itself, the result is 0. So, if an element appears twice, XORing it twice will result in 0. The element that appears only once will be left as the final result after XORing all the elements in the array.

*/