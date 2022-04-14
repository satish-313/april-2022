const searchBst = (root,val) => {
  if(root === null) return null;
  if (root.val === val) return val;
  return searchBst(root.left,val) || searchBst(root.right,val)  
}