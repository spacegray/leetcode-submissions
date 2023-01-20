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

const isBalanced = (root) => {
    // create a function to get the height of the tree
    const getHeight = (root) => {
        // check if the root is null
        if (root === null) {
            // if so, return 0
            return 0;
        }
        // recursively call the function to get the height of the left subtree
        let left = getHeight(root.left);
        // recursively call the function to get the height of the right subtree
        let right = getHeight(root.right);
        // check if the left subtree is balanced and the right subtree is balanced
        if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
            // if so, return -1
            return -1;
        }
        // return the height of the tree
        return Math.max(left, right) + 1;
    }
    // return the result of the function
    return getHeight(root) !== -1;
}