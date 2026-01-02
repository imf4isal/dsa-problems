/**
 * @param {string} s
 * @return {boolean}
 */

function isAlphaNumeric(str) {
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(str);
}

var isPalindrome = function(s) {
    let left = 0, right = s.length - 1;

    while(left<right){
        while(left<right && !isAlphaNumeric(s[left])) left++;
        while(left<right && !isAlphaNumeric(s[right])) right--;
        if(s[left].toLowerCase() !== s[right].toLowerCase()) return false;
        if(s[left].toLowerCase() === s[right].toLowerCase()){
            left++;
            right--;
        }
    }
    return true;
};