/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

/*
Plan: 

*/
var spiralOrder = function(matrix) {
    let result = [];
    let rowStart = 0;
    let rowEnd = matrix.length - 1;
    let colStart = 0;
    let colEnd = matrix[0].length - 1;
    
    while (rowStart <= rowEnd && colStart <= colEnd) {
        // top row
        for (let i = colStart; i <= colEnd; i++) {
            result.push(matrix[rowStart][i]);
        }
        rowStart++;
        
        // right column
        for (let i = rowStart; i <= rowEnd; i++) {
            result.push(matrix[i][colEnd]);
        }
        colEnd--;
        
        // bottom row
        if (rowStart <= rowEnd) {
            for (let i = colEnd; i >= colStart; i--) {
                result.push(matrix[rowEnd][i]);
            }
        }
        rowEnd--;
        
        // left column
        if (colStart <= colEnd) {
            for (let i = rowEnd; i >= rowStart; i--) {
                result.push(matrix[i][colStart]);
            }
        }
        colStart++;
    }
    
    return result;
    
};