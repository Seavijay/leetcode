/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
    if(pairs.length===0) return 0
    let arr = [],
        invalid = {},
        len = pairs.length,
        num = 0,
        init=pairs.reduce((accu,cur)=>cur[1]<accu[1]?cur:accu)
    arr.push(init)
    while (num < len) {
        let ref = arr[arr.length - 1],
            eligible
        pairs.forEach((item, index) => {
            if (!invalid[index]) {
                if (ref[1] < item[0]) {
                    eligible = eligible || item
                    eligible = eligible[1]>item[1]?item:eligible
                }else{
                    invalid[index]=item
                    ++num
                }
            }
        })
        eligible&&arr.push(eligible)
    }
    return arr.length
};