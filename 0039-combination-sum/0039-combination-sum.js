/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    const recurse = (current, sum, index) => {
        if (sum > target) return;
        if (sum === target) {
            result.push(current);
            return;
        }
        for (let i = index; i < candidates.length; i++) {
            recurse([...current, candidates[i]], sum + candidates[i], i);
        }
    }
    recurse([], 0, 0);
    return result;
};
