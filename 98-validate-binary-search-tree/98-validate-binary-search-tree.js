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
var isValidBST = function(root, leftMax = -Infinity, rightMax = Infinity){
    if(root === null) return true;
    return (root.val > leftMax && root.val < rightMax) && isValidBST(root.left, leftMax, root.val) && isValidBST(root.right, root.val, rightMax);
}