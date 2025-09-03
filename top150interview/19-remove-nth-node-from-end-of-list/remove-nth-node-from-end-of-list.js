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
    const dummy = new ListNode(-1, head);
    let f = dummy;
    let b = dummy;

    for(let i=0; i<n; i++){
        f = f.next;
        if(!f) return head;
    }
    while(f.next){
        f = f.next;
        b = b.next;
    }
    b.next = b.next.next;
    return dummy.next;
};