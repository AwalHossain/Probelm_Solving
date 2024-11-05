var isValidSudoku = function (board) {
  let row = Array.from({ length: 9 }, () => new Set());
  console.log(row, "");
  for (let r in board) {
    for (let c in board[r]) {
      let cell = board[r][c];
      console.log(r, "man", Math.floor(r / 3) * 3 + Math.floor(c / 3));
      if (cell === ".") {
        continue;
      }
    }
  }
};
let test = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(test));
