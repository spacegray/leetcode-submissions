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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    // base case
    if (!root) return [];
    // create an array to store the values of the tree
    let result = [];
    // create a helper function to traverse the tree
    var traverse = function(node) {
        // push the value of the node into the result array
        result.push(node.val);
        // check if the node has a left child
        if (node.left) traverse(node.left);
        // check if the node has a right child
        if (node.right) traverse(node.right);
    }
    // call the helper function
    traverse(root);
    // return the result array
    return result;
};