function generateMatrix(n: number): number[][] {
  const matrix: number[][] = [];
  for (let i = 0; i < n; i++) {
    matrix.push(new Array(n).fill(0));
  }

  let num = 1;
  let left = 0, right = n - 1, top = 0, bottom = n - 1;

  while (left <= right && top <= bottom) {
    // Traverse right
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }

    // Traverse down
    for (let i = top + 1; i <= bottom; i++) {
      matrix[i][right] = num++;
    }

    if (left < right && top < bottom) {
      // Traverse left
      for (let i = right - 1; i >= left; i--) {
        matrix[bottom][i] = num++;
      }

      // Traverse up
      for (let i = bottom - 1; i > top; i--) {
        matrix[i][left] = num++;
      }
    }

    left++;
    right--;
    top++;
    bottom--;
  }

  return matrix;
}
