const convertBST = (root) => {
  function rec(node, sum = 0) {
    if (node === null) return sum;

    let res_right = rec(node.right, (sum = sum));
    node.val += res_right;
    let res_left = rec(node.left, (sum = node.val));
    return res_left;
  }

  rec(root);
  return root;
};
