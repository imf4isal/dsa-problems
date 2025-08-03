/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    const res = [];

    for(let i = 0; i < nums.length - k + 1; i++){
        let sum = 0;

        for(let j = i; j < i+k; j++){
            sum+=nums[j];
        }
        res.push(sum/k);
    }
    

    let max = res[0];
    for(let i = 1; i < res.length; i++){
        if(res[i] > max) max = res[i];
    }

    return max;
};