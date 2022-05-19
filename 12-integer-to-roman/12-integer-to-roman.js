/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
    let result = "";
    let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    for (let i = 0; i < nums.length; i++) {
        while (num >= nums[i]) {
            result += romans[i];
            num -= nums[i];
        }
    }
    return result;
}