/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (nums.length === 0) return 0
    let maxAns = 1,
        len = nums.length,
        dp = new Array(len)
    dp[0] = 1
    for (let i = 1; i < len; ++i) {
        let maxVal = 0
        for (let j = 0; j < i; ++j) {
            if (nums[i] > nums[j]) maxVal = Math.max(maxVal, dp[j])
        }
        dp[i] = maxVal+1
        maxAns = Math.max(maxAns, dp[i])
    }
    return maxAns
};