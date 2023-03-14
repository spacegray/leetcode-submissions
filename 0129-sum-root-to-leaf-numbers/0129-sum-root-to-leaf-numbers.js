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

var sumNumbers = function(root) {
    let totalSum = 0;
    const helper = (node, currentNum) => {
        if (node === null) {
            return totalSum;
        }
        if (node.left === null && node.right === null) {
            totalSum += currentNum * 10 + node.val;
            return totalSum;
        }
        totalSum = helper(node.left, currentNum * 10 + node.val);
        totalSum = helper(node.right, currentNum * 10 + node.val);
        return totalSum;
    }
    helper(root, 0);
    return totalSum;
}