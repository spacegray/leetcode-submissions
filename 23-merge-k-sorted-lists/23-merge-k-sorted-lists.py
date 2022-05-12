# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        array = []
        for list in lists:
            while list:
                array.append(list.val)
                list = list.next

        array.sort()
        result = ListNode(0)
        resultArr = result
        for d in array:
            resultArr.next = ListNode(d)
            resultArr = resultArr.next

        return result.next