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
var minDepth = function(root) {
    // Check if the tree is empty
    if (root === null) {
        return 0;
    }
    
    // Initialize a queue for BFS
    const queue = [];
    // Push the root node along with its depth (level)
    queue.push({ node: root, depth: 1 });

    // Start BFS
    while (queue.length > 0) {
        // Dequeue a node
        const current = queue.shift();
        const currentNode = current.node;
        const currentDepth = current.depth;

        // Check if the current node is a leaf node
        if (currentNode.left === null && currentNode.right === null) {
            return currentDepth; // Return the depth when the first leaf is found
        }

        // Enqueue the left child if it exists
        if (currentNode.left !== null) {
            queue.push({ node: currentNode.left, depth: currentDepth + 1 });
        }

        // Enqueue the right child if it exists
        if (currentNode.right !== null) {
            queue.push({ node: currentNode.right, depth: currentDepth + 1 });
        }
    }

    // The loop should never reach here for a non-empty tree
    return 0;
};
