/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = []
    nums.forEach((item, index) => {
        const ans = target - item
        if(nums.indexOf(ans,fromIndex = index + 1) > index)
            result = result.concat([index, nums.indexOf(ans, fromIndex = index + 1)])
    })
    return result
    
};