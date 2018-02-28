/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let ans = 0
    if(x < 0)
        while(x !== 0){
            if(Math.abs(ans) >= (Math.pow(2, 31) - 1) / 10)
                return 0
            ans = ans * 10 + x % 10
            x = Math.ceil(x / 10)
        }
    else
        while(x !== 0){
            if(Math.abs(ans) >= Math.pow(2, 31) / 10)
                return 0
            ans = ans * 10 + x % 10
            x = Math.floor(x / 10)
    }
    return ans
};