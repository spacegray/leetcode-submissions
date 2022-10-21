/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] !== undefined && i - hash[nums[i]] <= k) {
            return true;
        } else {
            hash[nums[i]] = i;
        }
    }
    return false;
};