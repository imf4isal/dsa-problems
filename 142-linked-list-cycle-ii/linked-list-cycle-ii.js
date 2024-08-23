/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
 if(head === null || head.next === null) return null;

    let first = head;
    let second = head;
    while(second && second.next) {

        first = first.next;
        second = second.next.next;

        if(first === second) break;
    }

    if(!second || !second.next) return null;
    first = head;

    while(first !== second) {
        first = first.next;
        second = second.next;
    }

    return first;
};