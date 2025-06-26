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
    let dummy = null;
    let current = head;

    while(current){
        temp = current.next;
        current.next = dummy;
        dummy = current;
        current = temp;
    }
    return dummy;
};