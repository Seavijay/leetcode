var findCircleNum = function(M) {
    let res =0,
    whichHasTraversed={}
    function findCircleNum(arr){
        for(let i =0;i<arr.length;++i){
            if(whichHasTraversed[i])continue
            helper(i)
            ++res
        }
    }
    function helper(index){
        whichHasTraversed[index]=true
        for(let k = 0;k<M.length;++k){
            if(whichHasTraversed[k]||!M[index][k]) continue
            helper(k)
        }
    }
    findCircleNum(M)
    return res
};