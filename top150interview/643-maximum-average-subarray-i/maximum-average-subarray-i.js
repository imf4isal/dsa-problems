/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    const res = [];

    let windowSum = 0;
    let windowStart = 0;

    for(let windowEnd = 0; windowEnd < nums.length; windowEnd++){
        windowSum+=nums[windowEnd];

        if(windowEnd >= k - 1){
            res.push(windowSum/k);
            windowSum -= nums[windowStart];
            windowStart+=1;
        }
    }
    console.log(res);


    let max = res[0];
    for (let i = 1; i < res.length; i++) {
        if (res[i] > max) max = res[i];
    }

    return max;
};