/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if (!root) return 0;
    let sum = 0;
    function helper(node, isLeft) {
        if (!node) return;
        if (!node.left && !node.right) {
            if (isLeft) sum += node.val;
            return;
        }
        helper(node.left, true);
        helper(node.right, false);
    }
    helper(root, false);
    return sum;
    
};