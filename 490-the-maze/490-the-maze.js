/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */

var hasPath = function(maze, start, destination) {
    let visited = {};
    let queue = [start];
    let m = maze.length;
    let n = maze[0].length;
    let dx = [0, 0, 1, -1];
    let dy = [1, -1, 0, 0];
    let found = false;
    while (queue.length > 0) {
        let curr = queue.shift();
        let x = curr[0];
        let y = curr[1];
        if (x === destination[0] && y === destination[1]) {
            found = true;
            break;
        }
        if (visited[x + ',' + y]) {
            continue;
        }
        visited[x + ',' + y] = true;
        for (let i = 0; i < 4; i++) {
            let newX = x + dx[i];
            let newY = y + dy[i];
            while (newX >= 0 && newX < m && newY >= 0 && newY < n && maze[newX][newY] === 0) {
                newX += dx[i];
                newY += dy[i];
            }
            newX -= dx[i];
            newY -= dy[i];
            if (visited[newX + ',' + newY]) {
                continue;
            }
            queue.push([newX, newY]);
        }
    }
    return found;
}


