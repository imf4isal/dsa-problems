/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head || !head.next) return head;

    const dummy = null;
    let current = head;
    let prev = dummy;

    while(current){
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};