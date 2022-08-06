/* Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.*/

var longestPalindrome = function(s) {
    const map = {};
    let pairs = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            delete map [s[i]];
            pairs++;
        } else {
            map[s[i]] = 1;
        }
    }
    let maxLen = pairs * 2 + (Object.keys(map).length >= 1 ? 1 : 0);
    return maxLen;
};