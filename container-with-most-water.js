const maxArea = (height) => {
  let l = 0;
  let r = height.length - 1;
  let prod = Math.min(height[l], height[r]);

  while (l < r) {
    prod = Math.max(prod, (r - l) * Math.min(height[l], height[r]));
    if (height[l] < height[r]) l += 1;
    else r -= 1;
  }

  return prod;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1,1]))
console.log(maxArea([2, 3, 10, 5, 7, 8, 9]));
