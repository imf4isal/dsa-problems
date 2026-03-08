/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];

    let queue = [root];
    let values = [];

    while(queue.length){
        let size = queue.length;
        let level = [];
        
        for(let i = 0; i < size; i++){
            const current = queue.shift();
            level.push(current.val);

            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }

        values.push(level);
    }
    return values;
};