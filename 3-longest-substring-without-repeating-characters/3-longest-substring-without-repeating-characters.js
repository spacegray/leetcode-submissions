/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let start = 0;  // start of the current substring
    let seen = {};  // hashmap to keep track of characters in the current substring
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (seen[char]) {
            // if the character is in the hashmap, then we know that we have seen it before
            // so we need to update the start of the current substring
            start = Math.max(start, seen[char]);
        }
        // we add the current character to the hashmap
        seen[char] = i + 1;
        // we update the longest substring
        longest = Math.max(longest, i - start + 1);
    }
    return longest;
};