/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const checked = new Set();

    let currentA = headA, currentB = headB;

    while(currentA){
        checked.add(currentA);
        currentA = currentA.next;
    }

    while(currentB){
        if(checked.has(currentB)) return currentB;
        else {
            checked.add(currentB);
            currentB = currentB.next;
        }
    }
    return null;
};