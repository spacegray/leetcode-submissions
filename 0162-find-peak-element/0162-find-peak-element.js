/**
 * @param {number[]} nums
 * @return {number}
 */

/*
Strategy:
Binary Search
- if the middle element is greater than the element to the right of it, then the peak is on the left side of the middle element
- Otherwise the peak is on the right side of the middle element
- set variables for left, right, and middle indexes
- Using a while loop, we iterate through the array
- An if statement checks if the middle element is greater than the element to the right of it
- if it is, then we set the right index to the middle index
if it is not, then we set the left index to the middle index plus 1
we set the middle index to the middle index of the left and right index
- Then we return the left index because it is the peak element
 */
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor((left + right) / 2);
    
    while (left < right) {
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
        mid = Math.floor((left + right) / 2);
    }
    return left;
    
};