const lastStoneWeight = (stones) => {
  if (stones.length === 1) return stones[0];

  stones.sort((a, b) => a - b);

  while (stones.length > 1) {
    let last = stones.pop() - stones.pop();
    if (last !== 0) {
      stones.push(last);
      stones.sort((a, b) => a - b);
    }
  }

  return stones.length === 1 ? stones[0] : 0;
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
