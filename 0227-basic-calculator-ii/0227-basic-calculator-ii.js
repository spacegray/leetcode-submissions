/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    // create a variable to store the result
    let result = 0;
    // create a variable to store the current number
    let currentNumber = 0;
    // create a variable to store the last sign
    let lastSign = '+';
    // create an array to store the numbers
    let stack = [];
    // iterate through the string
    for (let i = 0; i < s.length; i++) {
        // check if the current character is a digit
        if (s[i] >= '0' && s[i] <= '9') {
            // convert the character to a number and add it to the current number
            currentNumber = (currentNumber * 10) + (s[i] - '0');
        }
        // check if the current character is not a digit and the current character is not a space
        if ((s[i] < '0' || s[i] > '9') && s[i] !== ' ' || i === s.length - 1) {
            // check if the last sign is a plus
            if (lastSign === '+') {
                // push the current number to the stack
                stack.push(currentNumber);
            // check if the last sign is a minus
            } else if (lastSign === '-') {
                // push the negative of the current number to the stack
                stack.push(-currentNumber);
            // check if the last sign is a multiplication
            } else if (lastSign === '*') {
                // multiply the last number in the stack by the current number
                stack[stack.length - 1] *= currentNumber;
            // check if the last sign is a division
            } else if (lastSign === '/') {
                // divide the last number in the stack by the current number
                stack[stack.length - 1] = Math.trunc(stack[stack.length - 1] / currentNumber);
            }
            // set the last sign to the current character
            lastSign = s[i];
            // reset the current number
            currentNumber = 0;
        }
    }
    // iterate through the stack
    for (let i = 0; i < stack.length; i++) {
        // add the current number to the result
        result += stack[i];
    }
    // return the result
    return result;
    
};