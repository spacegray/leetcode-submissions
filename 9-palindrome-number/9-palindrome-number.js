/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = x.toString();
    if (str.length === 1) {
        return true;
    }
    if (x < 0) {
        return false;
    }
    const start = str[0];
    const end = str[str.length - 1];
    if (start !== end) {
        return false;
    }
    if (str.length === 2) {
        return true;
    }
    const subStr = str.substring(1, str.length - 1);
    return isPalindrome(subStr);
};
