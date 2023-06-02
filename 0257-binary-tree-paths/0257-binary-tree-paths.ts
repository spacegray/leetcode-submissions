/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function binaryTreePaths(root: TreeNode | null): string[] {
  const paths: string[] = [];

  // Helper function to construct the paths
  function constructPaths(node: TreeNode | null, path: string) {
    if (node !== null) {
      // Append the current node's value to the path
      path += node.val.toString();

      // Check if the current node is a leaf
      if (node.left === null && node.right === null) {
        // If it's a leaf, add the path to the result
        paths.push(path);
      } else {
        // If it's not a leaf, continue constructing the paths recursively
        path += '->';
        constructPaths(node.left, path);
        constructPaths(node.right, path);
      }
    }
  }

  // Start constructing paths from the root
  constructPaths(root, '');

  return paths;
}