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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) {
        return null;
    }
    const left = invertTree(root.left);
    const right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
};

/* 
We first check if the root node exists, and if not, we return null. Otherwise, we recursively call the function on the left and right children. We then swap the left and right children of the root node and return the root node.

This algorithm has a time complexity of O(n), where n is the number of nodes in the tree, since we visit each node once. The space complexity is O(h), where h is the height of the tree, since the maximum number of recursive calls on the call stack is equal to the height of the tree.
*/
