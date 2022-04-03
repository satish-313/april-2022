const nextPermutation = (nums) => {
  let f, l;

  for (f = nums.length - 2; f >= 0; f--) {
    if (nums[f] < nums[f + 1]) break;
  }

  if (f < 0) return nums.reverse();
  else {
    for (l = nums.length - 1; l > f; l--) {
      if (nums[l] > nums[f]) break;
    }

    let temp = nums[l];
    nums[l] = nums[f];
    nums[f] = temp;

    let r = nums.length - 1;
    l = f + 1;
    while (l < r) {
      temp = nums[l];
      nums[l] = nums[r];
      nums[r] = temp;
      r -= 1;
      l += 1;
    }
  }

  return nums;
};

// console.log(nextPermutation([1, 3, 2]));
console.log(nextPermutation([1,2,3]))