/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [],
        hash={},
        lv=0
    function fn(node,lv){
        if(node){
            if(hash[lv]===undefined){
                hash[lv]=[node.val]
            }else{
                hash[lv].push(node.val)
            }
            fn(node.left,lv+1)
            fn(node.right,lv+1)
        }
    }
    fn(root,lv)
    for(const i in hash){
        res.push(hash[i])
    }
    return res
}