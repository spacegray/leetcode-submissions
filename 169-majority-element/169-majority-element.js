/**
 * @param {number[]} nums
 * @return {number}
 */

/*
Plan: 

create a hash to store visited nums
store times visited as the value
loop through nums array
update hash on each iteration
if num is already in the hash then increment its value
after reaching the end of nums input
return number with the highest value

*/
var majorityElement = function(nums) {
    let hash = {};
    let max = 0;
    let maxNum = null;
    for (let i = 0; i < nums.length; i++) {
        //check if key value pair exists
        if (hash[nums[i]]) {
        //then increment value of curr number
            hash[nums[i]]++
        } else {
            //assign key value pair in obj
            hash[nums[i]] = 1;
        }
        // determine and assign current max
        if(hash[nums[i]] > max) {
            max = hash[nums[i]];
            maxNum = nums[i];
        }
    }
    return maxNum;
    
};