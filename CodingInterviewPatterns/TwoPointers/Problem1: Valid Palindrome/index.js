/*
Problem Statement:
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

Constraints:
* 1 <= s.length <= 2 * 10^5
* s consists only of printable ASCII characters.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    if(s.length < 1) return false;
    let left = 0;
    let right = s.length - 1;
    while(left < right){
        while(left < right && !isAlphanumeric(s[left])) left++;
        while(left < right && !isAlphanumeric(s[right])) right--;
        if(s[left].toLowerCase() == s[right].toLowerCase()) {
            left++;
            right--;
        } else return false;
    }
    return true;
};

function isAlphanumeric(str) {
  return /^[a-zA-Z0-9]+$/.test(str);
}

const main = function() {
    let s = "A man, a plan, a canal: Panama";
    console.log("Input: ", s, " Output: ", isPalindrome(s));

    s = "race a car" 
    console.log("Input: ", s, " Output: ", isPalindrome(s));
}

main();