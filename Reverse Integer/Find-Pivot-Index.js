/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = 0,
        ass = 0
    for(const i of nums){
        sum+=i
    }
    for(let i = 0;i<nums.length;i++){
        if(2*ass===sum-nums[i]){
            return i
        }
        ass+=nums[i]
    }
    return -1
};