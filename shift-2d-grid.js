const shiftGrid = (grid, k) => {
  let row = grid.length;
  let col = grid[0].length;
  let temp;

  for (let t = 0; t < k; t++) {
    let prev = [];

    for (let i = 0; i < row; i++) {
      prev.push(grid[i][0]);
    }

    for (let i = 1; i < col; i++) {
      for (let j = 0, index = 0; j < row; j++, index++) {
        temp = grid[j][i];
        grid[j][i] = prev[index];
        prev[index] = temp;
      }
    }

    for (let i = 0, index = 0; i < row; i++, index++) {
      grid[(i + 1) % row][0] = prev[index];
    }
  }

  return grid;
};

console.log(
  shiftGrid(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    1
  )
);
