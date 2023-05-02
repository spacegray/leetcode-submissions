/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const result = [];
    let start = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] !== nums[i] + 1) {
            if (start === i) {
                result.push(nums[start].toString());
            } else {
                result.push(`${nums[start]}->${nums[i]}`);
            }
            start = i + 1;
        }
    }
    return result;
};
