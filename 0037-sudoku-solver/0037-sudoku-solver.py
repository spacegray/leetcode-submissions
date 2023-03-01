class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        def backtrack(row, col):
            # Check if we reached the end of the board
            if col == 9:
                row += 1
                col = 0
                if row == 9:
                    return True
            
            # Skip the cell if it's already filled
            if board[row][col] != '.':
                return backtrack(row, col+1)
            
            # Try filling the cell with each digit
            for num in range(1, 10):
                if is_valid(row, col, str(num)):
                    board[row][col] = str(num)
                    if backtrack(row, col+1):
                        return True
                    board[row][col] = '.'
                    
            # None of the digits worked, backtrack
            return False
        
        def is_valid(row, col, num):
            # Check row and column
            for i in range(9):
                if board[row][i] == num or board[i][col] == num:
                    return False
            
            # Check 3x3 sub-box
            sub_row = (row // 3) * 3
            sub_col = (col // 3) * 3
            for i in range(3):
                for j in range(3):
                    if board[sub_row+i][sub_col+j] == num:
                        return False
            
            # All checks passed
            return True
        
        # Start the backtracking algorithm
        backtrack(0, 0)
