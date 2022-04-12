const gameOfLife = (board) => {
  const deadLife = new Set(); /* those one that will loss life */
  const newLife = new Set(); /* those zero that will gain life */

  const dir = [[-1, 0],[1, 0],[0, 1],[0, -1],[-1, -1],[1, 1],[1, -1],[-1, 1]];  /* all eight direction */

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let nearLife = 0;
      let key = i + "," + j;

      for (let [r, c] of dir) { /* destructure r and c to generate all coordinates */
        let ir = r + i;
        let jc = c + j;
        let key = ir + "," + jc; /* for set purpose */

        if (ir >= 0 && ir < board.length && jc >= 0 && jc < board[0].length) {
          if (board[ir][jc] === 0 && deadLife.has(key)) nearLife += 1; /* 1's loss life due to overpopulation or under population */
          else if (board[ir][jc] === 1 && newLife.has(key)); /* 1's that gain life */
          else if (board[ir][jc] === 1) nearLife += 1; /* near by life's */
        }
      }

      if (nearLife < 2 && board[i][j] === 1) { /* 1's who loss life under population */
        board[i][j] = 0;
        deadLife.add(key);
      } else if (nearLife > 3 && board[i][j] === 1) { /* 1's who loss life by over population */
        board[i][j] = 0;
        deadLife.add(key);
      } else if (board[i][j] === 0 && nearLife === 3) { /* 0's who life gain */
        board[i][j] = 1;
        newLife.add(key);
      }
    }
  }
};

console.log(
  gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ])
);

[
  [0, 0, 0],
  [1, 0, 1],
  [0, 1, 1],
  [0, 1, 0],
];
