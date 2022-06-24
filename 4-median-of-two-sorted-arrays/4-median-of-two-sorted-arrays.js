/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
    // first we spread the arrays into a single array
  // then we sort the array
  const combinedArr = [...nums1, ...nums2].sort((a, b) => a - b);

  if (combinedArr.length % 2 !== 0) {
    // first we check if the length of the array is odd
    
    // then set an index variable for the middle element
    const index = (combinedArr.length - 1) / 2;

    return combinedArr[index].toFixed(5);
    //  we need to round the number to 5 decimal places
  }
  // otherwise, if even we return the average of the two middle elements
  const index = combinedArr.length / 2;
  return ((combinedArr[index - 1] + combinedArr[index]) / 2).toFixed(5);
};
