/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let m = heights.length;
    let n = heights[0].length;
    let pacific = Array(m).fill(0).map(() => Array(n).fill(false));
    let atlantic = Array(m).fill(0).map(() => Array(n).fill(false));
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    for(let i = 0; i < m; i++){
        dfs(heights, pacific, -Infinity, directions, i, 0);
        dfs(heights, atlantic, -Infinity, directions, i, n - 1);
    }

    for(let i = 0; i < n; i++){
        dfs(heights, pacific, -Infinity, directions, 0, i);
        dfs(heights, atlantic, -Infinity, directions, m - 1, i);
    }

    let result = [];
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(pacific[i][j] && atlantic[i][j]){
                result.push([i, j]);
            }
        }
    }
    return result;
};

var dfs = function(heights, visited, prevHeight, directions, x, y){
    if(x < 0 || y < 0 || x >= heights.length || y >= heights[0].length || visited[x][y] || heights[x][y] < prevHeight) return;
    visited[x][y] = true;
    for(let dir of directions){
        dfs(heights, visited, heights[x][y], directions, x + dir[0], y + dir[1]);
    }
};
