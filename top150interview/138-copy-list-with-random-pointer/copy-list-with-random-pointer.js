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
    const nodeMap = new Map();
    let current = head;
    let idx = 0;

    const arr = [];

    while(current){
        arr.push(new ListNode(current.val, null, null))
        nodeMap.set(current, idx);
        current = current.next;
        idx++;
    }

    arr.push(null);

    current = head;
    for(let i=0; i< arr.length-1; i++){
        const randomNode = current.random;
        if(randomNode){
            const randomNodeIdx = nodeMap.get(randomNode);
            arr[i].random = arr[randomNodeIdx];
        }else{
            arr[i].random = null;
        }
        current = current.next;
    }

    for(let i=0; i<arr.length-1; i++){
        arr[i].next = arr[i+1];
    }
    
    return arr[0];
};