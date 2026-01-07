/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var listLength = function(head) {

    let len = 0, current = head;
    while(current) {
        len++;
        current = current.next;
    }
    return len;
}

var removeNthFromEnd = function(head, n) {
    
    const len = listLength(head);
    const nthNodeToRemove = len - n;

    if(len === n) return head.next;
    let current = head;

    for(let i = 1; i < nthNodeToRemove; i++) {
        current = current.next;
    }
    current.next = current.next.next;
    return head;
    
};