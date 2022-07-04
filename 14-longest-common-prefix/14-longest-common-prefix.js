/**
 * @param {string[]} strs
 * @return {string}
 */

let longestCommonPrefix = function(strs) {
        if(!strs.length) {
            return '';
        }
        for(let i = 0; i < strs[0].length; i++) {
            for(let wrd of strs) {
                if(wrd[i] !== strs[0][i]) {
                    return wrd.slice(0, i);
                }
            }
        }
        return strs[0];
    };