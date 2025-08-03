/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let min = Infinity;
    let windowSum = 0;
    let windowStart = 0;

    for(let windowEnd = 0; windowEnd < nums.length; windowEnd++){
        windowSum += nums[windowEnd];

        //check whether the sum is greater than or equal target

        while(windowSum >= target) {
            min = Math.min(min, windowEnd - windowStart + 1);
            console.log(min);
            windowSum -= nums[windowStart];
            windowStart += 1;
        }
    }

    if(min === Infinity) return 0;

    return min;
};