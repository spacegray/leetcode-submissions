/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // create two empty objects to hold character mappings
    const mapS = {};
    const mapT = {};
    
    // iterate through the characters of the strings
    for (let i = 0; i < s.length; i++) {
        // get the current character from each string
        const charS = s[i];
        const charT = t[i];
        
        // if either of the maps doesn't contain the character, add it with the other character as its value
        if (!mapS[charS]) {
            mapS[charS] = charT;
        }
        if (!mapT[charT]) {
            mapT[charT] = charS;
        }
        
        // if the value of the character in one map is not the same as the character in the other map, return false
        if (mapS[charS] !== charT || mapT[charT] !== charS) {
            return false;
        }
    }
    
    // if we made it through the loop without returning false, the strings are isomorphic
    return true;
};
