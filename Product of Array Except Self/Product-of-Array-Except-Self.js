/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    if (nums.indexOf(0) !== nums.lastIndexOf(0)) return nums.fill(0)
    if (nums.indexOf(0) === -1) {
        let pro = nums.reduce((accu, cur) => accu * cur, 1),
            res = []
        for (const i in nums) {
            res.push(pro / nums[i])
        }
        return res
    } else {
        let pro = nums.reduce((accu, cur) => {
            if (cur === 0) return accu
            return accu * cur
        }, 1),
            index= nums.indexOf(0)
        nums.fill(0)
        nums[index]=pro
        return nums
    }
};