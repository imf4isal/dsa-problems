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
var swapPairs = function(head) {
    if(!head || !head.next) return head;

    let firstNode = head;
    head = firstNode.next;

    while(firstNode && firstNode.next){
        let thirdNode = firstNode.next.next;

        firstNode.next.next = firstNode;
        firstNode.next = thirdNode && thirdNode.next ? thirdNode.next : thirdNode;
        firstNode = thirdNode;
    }

    return head;
};