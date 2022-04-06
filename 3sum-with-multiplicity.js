const threeSumMulti = (arr, target) => {
  const count = new Array(101).fill(0);
  const module = 1e9 + 7;
  let res = 0;

  arr.forEach((i) => count[i]++);

  for (let i = 0; i < 101; i++) {
    for (let j = i; j < 101; j++) {
      let k = target - i - j;

      if (k < 0 || k > 100) continue;

      if (i === j && i === k) {
        res += Math.floor((count[i] * (count[i] - 1) * (count[i] - 2)) / 6);
      } else if (i === j && j != k) {
        res += Math.floor((count[i] * (count[i] - 1)) / 2) * count[k];
      } else if (i < j && j < k) {
        res += count[i] * count[j] * count[k];
      }

      res %= module;
    }
  }

  return res;
};

console.log(threeSumMulti([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 8));
