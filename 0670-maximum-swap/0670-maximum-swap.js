/**
 * @param {number} num
 * @return {number}
 */
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    let digits = num.toString().split('').map(d => +d);
    let maxIdx = digits.length - 1, maxDigit = -1;
    let leftIdx = -1, rightIdx = -1;

    // Scan from right to left
    for (let i = digits.length - 1; i >= 0; --i) {
        // If we found a digit smaller than the current maximum, we swap it with the max digit
        if (digits[i] > maxDigit) {
            maxDigit = digits[i];
            maxIdx = i;
        } else if (digits[i] < maxDigit) {
            leftIdx = i;
            rightIdx = maxIdx;
        }
    }

    // Perform the swap
    if (leftIdx !== -1) {
        [digits[leftIdx], digits[rightIdx]] = [digits[rightIdx], digits[leftIdx]];
    }
    
    return parseInt(digits.join(''));
};
