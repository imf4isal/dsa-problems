/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0, j = height.length-1, max = 0;
    
    while(i < j){

        const area = (j - i) * Math.min(height[j], height[i]);
        max = Math.max(max, area);

        if(height[i] < height[j]) i++;
        else if(height[j] < height[i]) j--;
        else{
            i++;
            j--;
        }
    }
    return max;
};