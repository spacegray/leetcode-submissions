# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return None
        slow = head
        fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                break
        else:
            return None
        slow = head
        while slow != fast:
            slow = slow.next
            fast = fast.next
        return slow

    """
The time complexity is O(n) and the space complexity is O(1).

The idea is to use two pointers, one slow and one fast. 
The slow pointer moves one step at a time while the fast pointer moves two steps at a time. 

If there is no cycle in the list, the fast pointer will eventually reach the end 
and we can return null. Now consider a cyclic list and imagine the slow and 
fast pointers are two runners racing around a circle track. The fast runner will 
eventually meet the slow runner. 

Why? Consider this case (we name it case A) - 
The fast runner is just one step behind the slow runner. In the next iteration, 
they both increment one and two steps respectively and meet each other.

How about other cases? For example, we have not considered cases where the fast
runner is two or three steps behind the slow runner yet. This is simple, because
in the next or next's next iteration, this case will be reduced to case A mentioned above.

""" 