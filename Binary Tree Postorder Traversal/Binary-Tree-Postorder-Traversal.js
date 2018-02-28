/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let res = []
    function h(node) {
        if (node) {
            h(node.left)  
            h(node.right)
            res.push(node.val)
        }
    }
    h(root)
    return res
};