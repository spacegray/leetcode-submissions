# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        #  edge case
        if not root:
            return []
        #  BFS: use a queue to store the nodes
        queue = [root]
        result = []
        while queue:
            level = []
            for _ in range(len(queue)):
                #  pop the first node in the queue
                #  append the node's value to the level list
                #  append the node's left and right child to the queue
                #  if the node has no left or right child, the queue will be empty
                node = queue.pop(0)
                level.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            result.append(level)
        return result