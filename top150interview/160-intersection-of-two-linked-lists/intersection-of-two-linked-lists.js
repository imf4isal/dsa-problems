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
    let pointA = headA, pointB = headB;

    while(pointA !== pointB){
        if(pointA) pointA = pointA.next;
        else pointA = headB;

        if(pointB) pointB = pointB.next;
        else pointB = headA; 
    }
    return pointA;
};