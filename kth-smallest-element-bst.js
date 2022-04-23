class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let five = new TreeNode(5);
let three = new TreeNode(3);
let six = new TreeNode(6);
let two = new TreeNode(2);
let four = new TreeNode(4);
let one = new TreeNode(1);
let eight = new TreeNode(8);
let seven = new TreeNode(7);
let nine = new TreeNode(9);

five.left = three;
five.right = six;
three.left = two;
three.right = four;
two.left = one;
six.right = eight;
eight.left = seven;
eight.right = nine;

const kthSmallest = (root,k) => {
  const result = [0];

  function rec (root) {
    if (root === null) return;
    if (k === 0) return;
    rec(root.left);
    k -= 1;
    if (k === 0) result[0] = root.val;
    rec(root.right)
  }
  rec(root)
  return result[0]
}

console.log(kthSmallest(five,3))