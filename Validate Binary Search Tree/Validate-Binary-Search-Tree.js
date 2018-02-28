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
var isValidBST = function (root) {
    let arr = [],
        res = true
    function h(node) {
        if (node) {
            h(node.left)
            arr.push(node.val)
            h(node.right)
        }
    }
    h(root)
    for (let i = 0; i < arr.length - 1; ++i) {
        if (arr[i + 1] <= arr[i]) {
            res = false
            break
        }
    }
    return res
};