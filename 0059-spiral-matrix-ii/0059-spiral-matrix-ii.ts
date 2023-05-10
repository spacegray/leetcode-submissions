function generateMatrix(n: number): number[][] {
  const result: number[][] = Array(n).fill(0).map(() => Array(n).fill(0));
  let num = 1;
  let rowStart = 0, rowEnd = n - 1, colStart = 0, colEnd = n - 1;
  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let col = colStart; col <= colEnd; col++) {
      result[rowStart][col] = num++;
    }
    for (let row = rowStart + 1; row <= rowEnd; row++) {
      result[row][colEnd] = num++;
    }
    if (rowStart < rowEnd && colStart < colEnd) {
      for (let col = colEnd - 1; col > colStart; col--) {
        result[rowEnd][col] = num++;
      }
      for (let row = rowEnd; row > rowStart; row--) {
        result[row][colStart] = num++;
      }
    }
    rowStart++;
    rowEnd--;
    colStart++;
    colEnd--;
  }
  return result;
}

/* 
This strategy works by keeping track of four variables, rowStart, rowEnd, colStart, and colEnd, that represent the boundaries of the current spiral. It then uses a single loop to iterate over the elements of the spiral, starting with the top row and moving clockwise around the perimeter. The loop terminates when the boundaries of the spiral have crossed over each other.

In each iteration of the loop, we first fill in the top row, then the right column, then the bottom row (if applicable), and finally the left column (if applicable). We also increment the value of num each time we fill in a cell.

*/