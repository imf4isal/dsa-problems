/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let left = 0, right = height.length - 1, max_water = 0;

    while(left < right){
        let water = Math.min(height[left], height[right]) * (right-left);
        max_water = Math.max(max_water, water);

        if(height[left]<height[right]) left++;
        else if(height[left]>height[right]) right--;
        else{
            left++;
            right--;
        }
    }
    return max_water;


    // for(let i = 0; i < n; i++){
    //     for(let j = i+1; j < n; j++){
    //         let water = Math.min(height[i], height[j]) * (j-i);
    //         max_water = Math.max(max_water, water); 
    //     }
    // }
    // return max_water;
};