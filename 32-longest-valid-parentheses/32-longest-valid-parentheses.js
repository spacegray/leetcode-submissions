
var longestValidParentheses = function(s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (stack.length && s[stack[stack.length - 1]] === '(' && s[i] === ')') {
            stack.pop();
        } else {
            stack.push(i);
        }
    }
    if (stack.length === 0) return s.length;
    var end = s.length - 1;
    var max = 0;
    while (stack.length) {
        var start = stack.pop() + 1;
        max = Math.max(max, end - start + 1);
        end = start - 2;
    }
    return Math.max(max, end - 0 + 1);;
};