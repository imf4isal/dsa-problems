/**
 * @param {string} s
 * @return {boolean}
 */
var isAlNum = function(s) {
    return /^[a-zA-Z0-9]+$/.test(s);
}

var isPalindrome = function(s) {
    let left = 0, right = s.length - 1;
    while(left<right){
        while (left<right && !isAlNum(s[left])) left++;
        while (left<right && !isAlNum(s[right])) right--;
        if(s[left].toLowerCase() !== s[right].toLowerCase()) return false;
       
        left++;
        right--
    }
    return true;
};