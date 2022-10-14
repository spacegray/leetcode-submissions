/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let seen = {}
    
    for (let num of nums)
        if (seen[num]) {
            return true; 
        } else {
            seen[num] = 1;
    }
    return false;
};