/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let left = new ListNode(0);
    let right = new ListNode(0);
    let leftCurr = left;
    let rightCurr = right;
    let curr = head;
    while(curr) {
        if(curr.val < x) {
            leftCurr.next = curr;
            leftCurr = leftCurr.next;
        } else {
            rightCurr.next = curr;
            rightCurr = rightCurr.next;
        }
        curr = curr.next;
    }
    leftCurr.next = right.next;
    rightCurr.next = null;
    return left.next;
}