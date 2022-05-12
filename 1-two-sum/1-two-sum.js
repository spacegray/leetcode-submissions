/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function(nums, target) {
    const map = {};
    const len = nums.length;
    map[target - nums[0]] = 0;
    for (let i = 1; i < len; i++) {
        const n = nums[i];
        if (n in map) return [map[n], i];
         map[target-n] = i;
}
}