/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if(!head) return null;
    
    let current = head;
    while(current){
        const copyNode = new _Node(current.val, current.next, null);
        current.next = copyNode;
        current = copyNode.next;
    }

    current = head;
    while (current) {
        const copy = current.next;
        copy.random = current.random ? current.random.next : null;
        current = copy.next;
    }

    current = head;
    const newHead = current.next;
    while(current){
        const copy = current.next;
        current.next = copy.next;
        current = current.next;
        copy.next = current ? current.next : null;
    }

    return newHead;
};