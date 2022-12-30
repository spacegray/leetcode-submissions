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
 * @return {boolean}
 */

var isSymmetric = function(root) {
    // base case
    if (!root) return true;
    // recursive case
    return isMirror(root.left, root.right);
}

// helper function to check if two sides are mirror images of each other
var isMirror = function(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    return left.val === right.val && isMirror(left.left, right.right) && isMirror(left.right, right.left);
}
