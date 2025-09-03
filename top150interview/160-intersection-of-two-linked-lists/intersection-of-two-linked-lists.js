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

    const hashL = new Set();

    let currA = headA;
    while(currA){
        hashL.add(currA);
        currA = currA.next;
    }

    let currB = headB;
    while(currB){
        if(hashL.has(currB)) return currB;
        currB = currB.next;
    }
    return null;
};