# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
import random

class Solution:
    def __init__(self, head: ListNode):
        self.head = head

    def getRandom(self) -> int:
        result = self.head.val
        node = self.head.next
        i = 2
        while node:
            if random.random() < 1/i:
                result = node.val
            i += 1
            node = node.next
        return result
    
    """
    To solve this problem, we need to ensure that each node in the linked list has an equal probability of being chosen. One way to achieve this is by using reservoir sampling, which allows us to randomly select a single element from a list of unknown or extremely large size.

The basic idea of reservoir sampling is to iterate over the elements of the list and select a random element with a probability of 1/i, where i is the index of the current element. When we reach the end of the list, the selected element will have a uniform probability of being any of the elements in the list.

To implement this for the given problem, we can start by initializing a variable result to store the value of the first node in the list. We then iterate over the rest of the list and at each step, with probability 1/i, we update the result variable to the value of the current node. At the end of the iteration, result will contain the value of a random node in the list with equal probability.
    """