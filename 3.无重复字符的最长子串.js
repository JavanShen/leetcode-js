//https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */

//滑动窗口
var lengthOfLongestSubstring = function (s) {
    //定义l,r左右两边,map记录字符出现的位置,max记录最大长度
    let l = r = 0, len = s.length, map = new Map(), max = 0

    while (r < len) {
        let str = s[r]
        //当字符已经出现过且在窗口中时,更新窗口,更新最大值
        if (map.has(str) && map.get(str) >= l) {
            max = Math.max(max, r - l)
            l = map.get(str) + 1
        } else {
            map.set(str, r)
            r++
        }
    }

    //最后一次更新窗口
    max = Math.max(max, r - l)

    return max
};