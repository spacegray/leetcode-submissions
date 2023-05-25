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

function isPalindrome(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return true; // An empty list or a single node is still considered a palindrome
  }

  let slow = head;
  let fast = head;

  // Move fast pointer to the middle of the list
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the list
  let prev = null;
  let curr = slow;
  while (curr !== null) {
    const nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  // Compare the reversed second half with the first half
  let firstHalf = head;
  let secondHalf = prev;
  while (secondHalf !== null) {
    if (firstHalf.val !== secondHalf.val) {
      return false;
    }
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  return true;
}

/*
This solution has a time complexity of O(N), where N is the number of nodes in the linked list. We only need to iterate through the list twice: once to find the middle and once to compare the values. The space complexity is O(1) since we are not using any extra data structures.
*/