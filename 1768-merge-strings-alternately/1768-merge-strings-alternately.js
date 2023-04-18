/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

var mergeAlternately = function(word1, word2) {
    // Initialize variables to store the merged string and the lengths of the input strings
    let merged = '';
    let n1 = word1.length;
    let n2 = word2.length;
    
    // Loop over the length of the longer string (either n1 or n2)
    for (let i = 0; i < Math.max(n1, n2); i++) {
        // If i is less than the length of word1, add the i-th character of word1 to the merged string
        if (i < n1) {
            merged += word1[i];
        }
        // If i is less than the length of word2, add the i-th character of word2 to the merged string
        if (i < n2) {
            merged += word2[i];
        }
    }
    
    // Return the merged string
    return merged;
};
