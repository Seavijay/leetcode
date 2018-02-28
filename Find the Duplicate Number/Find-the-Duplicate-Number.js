/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let hash ={}
    for(const i in nums){
        if(hash[nums[i]]===undefined)
            hash[nums[i]]=1
        else
            return nums[i]
    }
};