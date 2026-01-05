/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var twoSum = function(nums, start, target) {
  const pairs = [];
  let left = start, right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      pairs.push([nums[left], nums[right]]);
      left++;
      right--;

      while (left < right && nums[left] === nums[left - 1]) left++;
    //   while (left < right && nums[right] === nums[right + 1]) right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return pairs;
};

var threeSum = function(nums) {
  const triplets = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    const pairs = twoSum(nums, i + 1, -nums[i]);
    for (const pair of pairs) {
      triplets.push([nums[i], ...pair]);
    }
  }
  return triplets;
};
