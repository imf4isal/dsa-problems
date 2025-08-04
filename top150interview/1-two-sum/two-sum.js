/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const sortedNums = [...nums].sort((a,b) => a - b);
    
    let left = 0;
    let right = sortedNums.length - 1;

    while(sortedNums[left]+sortedNums[right] !== target){
        if(sortedNums[left]+sortedNums[right] < target){
            left++;
        }else{
            right--;
        }
    }
    console.log(sortedNums[left], sortedNums[right]);

    const l = nums.indexOf(sortedNums[left]);
    nums[nums.indexOf(sortedNums[left])] = '_';
    const r = nums.indexOf(sortedNums[right]);

    return [l, r]
};