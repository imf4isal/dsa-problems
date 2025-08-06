function threeSum(nums) {
  const triplets = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    const target = -nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum === target) {
        triplets.push([nums[i], nums[left], nums[right]]);
        const leftVal = nums[left];
        const rightVal = nums[right];

        while (left < right && nums[left] === leftVal) left++;
        while (left < right && nums[right] === rightVal) right--;
        
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return triplets;
}