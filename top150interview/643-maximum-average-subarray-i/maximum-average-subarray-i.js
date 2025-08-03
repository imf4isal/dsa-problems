/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let max = Number.NEGATIVE_INFINITY;

    let windowSum = 0;
    let windowStart = 0;

    for(let windowEnd = 0; windowEnd < nums.length; windowEnd++){
        windowSum+=nums[windowEnd];

        if(windowEnd >= k - 1){
            max = Math.max(max, windowSum/k);
            windowSum -= nums[windowStart];
            windowStart+=1;
        }
    }
    
    return max;
};