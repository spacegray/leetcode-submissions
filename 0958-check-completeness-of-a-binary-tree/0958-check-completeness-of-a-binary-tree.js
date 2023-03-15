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


var isCompleteTree = function(root) {
    let queue = [root]; // Initialize a queue with the root node.
    let seenNull = false; // Initialize a variable to keep track of whether we have seen a null node.
    while (queue.length > 0) { // While the queue is not empty,
        let node = queue.shift(); // Dequeue the first node.
        if (node === null) { // If the node is null,
            seenNull = true; // Set seenNull to true.
        } else { // Otherwise,
            if (seenNull) { // If we have seen a null node,
                return false; // Return false.
            }
            queue.push(node.left); // Enqueue the left child.
            queue.push(node.right); // Enqueue the right child.
        }
    }
    return true; // Return true.
}