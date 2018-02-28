/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let res=[],
        sum=0
    const hash={}
    nums.forEach((num,index)=>{
        sum = sum+index+1-num
        if(hash[num]===undefined){
            hash[num]=index
        }else{
            res.push(num)
        }
    })
    res.push(res[0]+sum)
    return res
};