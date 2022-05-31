/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) return [];
    let map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    let result = [];
    let helper = (str, index) => {
        if (index === digits.length) {
            result.push(str);
            return;
        }
        let curr = digits[index];
        let letters = map[curr];
        for (let i = 0; i < letters.length; i++) {
            helper(str + letters[i], index + 1);
        }
    };
    helper('', 0);
    return result;
    
};