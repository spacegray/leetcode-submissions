/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack = [];
    let i = 0; // index for pushed array
    
    for (let num of pushed) {
        stack.push(num);
        
        // check if the next element to be popped is on top of the stack
        while (stack.length > 0 && stack[stack.length-1] === popped[i]) {
            stack.pop();
            i++;
        }
    }
    
    return stack.length === 0;
};
