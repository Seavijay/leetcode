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
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    let res = []
    if (root === null) {
        return res
    }
    function fn(node, arr, accu) {
        if (node.right || node.left) {
            if (node.left) {
                fn(node.left, arr.concat(node.left.val), accu + node.left.val)
            }
            if (node.right) {
                fn(node.right, arr.concat(node.right.val), accu + node.right.val)
            }
        }
        else {
            if (accu === sum) {
                res.push(arr)
            }
        }
    }
    fn(root, [root.val], root.val)
    return res

};