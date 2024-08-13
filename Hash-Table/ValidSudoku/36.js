/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let rows = Array.from({ length: 9 }, () => new Set());
  console.log(rows, "hem");
  const column = Array.from({ length: 9 }, () => new Set());
  const squares = Array.from({ length: 9 }, () => new Set()); // key = (r / 3) * 3 + c / 3

  for (let r in board) {
    for (let c in board) {
      let cell = board[r][c];
      if (cell === ".") {
        continue;
      }
      const squareIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      if (
        rows[r].has(cell) ||
        column[c].has(cell) ||
        squares[squareIndex].has(cell)
      ) {
        return false;
      }

      rows[r].add(cell);
      column[c].add(cell);
      squares[squareIndex].add(cell);
    }
  }
  return true;
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
