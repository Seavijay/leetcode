/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
    let res = 0
    function h(node, path) {
        if (node) {
            if(node.val===sum){res++}
            path.reduceRight((accu, cur) => {
                if (accu + cur === sum) { res++ }
                return accu+cur
            }, node.val)
            h(node.left, path.concat(node.val))
            h(node.right, path.concat(node.val))
        }
    }
    h(root,[])
    return res
};