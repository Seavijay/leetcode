/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    let i2 = i3 = i5 = 0,
        times = 1,
        arr=[1]
    while (times < n) {
        let m2 =  arr[i2] * 2,
            m3 = arr[i3] * 3,
            m5 = arr[i5] * 5,
            mn = Math.min(m2, m3, m5)
        if (mn === m2)++i2
        if (mn === m3)++i3
        if (mn === m5)++i5
        arr.push(mn)
        times++
    }
    return arr[arr.length-1]
};