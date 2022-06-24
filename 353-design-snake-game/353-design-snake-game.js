/**
 * @param {number} width
 * @param {number} height
 * @param {number[][]} food
 */
class SnakeGame {
  constructor(width, height, food) {
    this.foodIdx = 0;
    this.food = food;
    this.width = width;
    this.height = height;
    this.deque = [[0, 0]];
    this.dequeMap = {};
    this.dirs = {
      U: [-1, 0],
      D: [1, 0],
      L: [0, -1],
      R: [0, 1],
    };
  }

  move(direction) {
    const [currRow, currCol] = this.deque[0];
    const nextRow = currRow + this.dirs[direction][0];
    const nextCol = currCol + this.dirs[direction][1];

    const isOutOfBound =
      nextRow < 0 ||
      nextCol < 0 ||
      nextRow >= this.height ||
      nextCol >= this.width;
    if (isOutOfBound) return -1;

    // if snake bites itself
    const nextHeadKey = this.getKey(nextRow, nextCol);
    if (nextHeadKey in this.dequeMap) {
      const tail = this.deque[this.deque.length - 1];
      const isSafe = tail[0] === nextRow && tail[1] === nextCol;

      if (!isSafe) return -1;
    }

    const haveFood =
      this.foodIdx < this.food.length &&
      this.food[this.foodIdx][0] === nextRow &&
      this.food[this.foodIdx][1] === nextCol;

    if (!haveFood) {
      const [tailRow, tailCol] = this.deque.pop();
      const key = this.getKey(tailRow, tailCol);
      delete this.dequeMap[key];
    } else {
      this.foodIdx++;
    }

    this.deque.unshift([nextRow, nextCol]);
    this.dequeMap[nextHeadKey] = true;

    return this.deque.length - 1;
  }

  getKey(row, col) {
    return `${row}-${col}`;
  }
}