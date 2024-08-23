/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashM = new Map();
    
    for(let i = 0; i < nums.length; i++){
        if(hashM.get(target - nums[i]) !== undefined) return [hashM.get(target - nums[i]), i];
        else hashM.set(nums[i], i);
    }

    return [null, null]
};