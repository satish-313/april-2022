const generateMatix = (n) => {
  const matrix = Array(n)
    .fill()
    .map(() => Array(n).fill(0));
  let i = 0,
    j = 0,
    di = 0,
    dj = 1;

  for (let k = 0; k < n * n; k++) {
    matrix[i][j] = k + 1;
    if (matrix[(i + di) % n][(j + dj) % n < 0 ? n + dj : (j + dj) % n]) {
      let t = di;
      di = dj;
      dj = -t;
    }

    i += di;
    j += dj;
  }

  return matrix;
};

console.log(generateMatix(3));
