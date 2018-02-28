/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
    let hash = {},
        set = new Set,
        res = 1
    for (const i in nums) {
        let n = 0,
            j = i
        while (hash[j]===undefined) {
            hash[j] = nums[j]
            n++
            j = nums[j]
        }
        set.add(n)
    }
    set.forEach((item,index)=>{
        if(item > res)res=item
    })
    return res
};