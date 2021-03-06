/**
 * Approach: Step 1, Top down recursive
 * Time Complexity: O(8^k)
 * Space Complexity: O(8^k)
 */

const DIRECTIONS = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
];

function knightProbability(n, k, row, column) {
  if (row < 0 || column < 0 || row >= n || column >= n) {
    return 0;
  }

  if (k === 0) {
    return 1;
  }

  let res = 0;

  for (let dir of DIRECTIONS) {
    res += knightProbability(n, k - 1, row + dir[0], column + dir[1]) / 8;
  }

  return res;
}
