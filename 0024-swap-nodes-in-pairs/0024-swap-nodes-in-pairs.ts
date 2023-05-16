/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
    // Step 1: Check if head is null or there is only one node
    if (head === null || head.next === null) {
        return head;
    }

    // Step 2: Create a newHead variable
    const newHead = head.next;

    // Step 3: Set the next node of the head
    head.next = swapPairs(newHead.next);

    // Step 4: Set the next node of newHead
    newHead.next = head;

    // Step 5: Return the new head of the swapped pairs
    return newHead;
}