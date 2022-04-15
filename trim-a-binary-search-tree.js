const trimBST = (root, low, high) => {
  if (root === null) return null;

  if (root.val < low) return trimBST(root.right, low, high);
  else if (root.val > high) return trimBST(root.left, low, high);

  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);
  return root;
};
