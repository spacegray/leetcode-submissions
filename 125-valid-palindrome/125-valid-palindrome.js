/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    // Return the value of the string converted to lower case.
    // Using Regex - Remove special symbols and extra spaces.
    let sentence = s.toLowerCase().replace(/[\W_]/g, "");
	
	// Two pointers - one at the beginning, one at the end.
    let i=0;
    let j=sentence.length-1;
    
	// Compare two pointers.
    while(i<j){
        if(sentence[i]!==sentence[j]) return false;
        i++;
        j--;
    }
    return true;
};