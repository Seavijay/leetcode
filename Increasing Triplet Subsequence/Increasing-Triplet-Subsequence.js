/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let min=middle=Number.MAX_VALUE
    for(const i in nums){
        if(nums[i]<=min) min =nums[i]
        else if(nums[i]<=middle) middle= nums[i]
        else return true
    }
    return false
};