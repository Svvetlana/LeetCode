/*Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.
Input: s='egg', t='add' Output: true*/

var isIsomorphic = function (s, t) {
    if (t.length !== s.length) return false;
    const map_s = {};
    const map_t = {};
    for (let i = 0; i < s.length; i++) {
        if (map_s[s[i]] && map_s[s[i]] !== t[i])
            return false;
        map_s[s[i]] = t[i];
        if (map_t[t[i]] && map_t[t[i]] !== s[i])
            return false;
        map_t[t[i]] = s[i]
    }
    return true;
};