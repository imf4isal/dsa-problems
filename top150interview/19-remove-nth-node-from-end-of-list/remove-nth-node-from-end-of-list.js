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
var removeNthFromEnd = function(head, n) {
    let len = 0;
    let current = head;
    while(current){
        current = current.next;
        len++;
    }
    
    if(len - n === 0) return head.next;

    let nodeBefore = len - n - 1;

    let reference = 0;
    let first = head;
    let second = head.next;

    while(nodeBefore !== reference){
        first = first.next;
        second = second.next;
        reference++;
    }
    first.next = second.next;
    return head;
};