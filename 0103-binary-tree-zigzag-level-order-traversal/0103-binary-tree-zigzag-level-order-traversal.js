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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  let res = [];
  let q = [];

  if (root !== null) {
    q.push(root);
  }

  let reverse = false;

  while (q.length > 0) {
    let level = [];
    let size = q.length;

    for (let i = 0; i < size; i++) {
      let curr = q.shift();
      level.push(curr.val);

      if (curr.left !== null) {
        q.push(curr.left);
      }
      if (curr.right !== null) {
        q.push(curr.right);
      }
    }

    if (reverse) {
      level.reverse();
    }

    res.push(level);
    reverse = !reverse;
  }

  return res;
};
