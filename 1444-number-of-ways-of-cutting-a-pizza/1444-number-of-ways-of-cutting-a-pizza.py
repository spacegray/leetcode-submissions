class Solution:
    def ways(self, pizza: List[str], k: int) -> int:
        MOD = 10 ** 9 + 7
        rows, cols = len(pizza), len(pizza[0])

        # Calculate the prefix sum of the number of apples in the subrectangle defined by (i, j) to (rows-1, cols-1)
        apples = [[0] * (cols + 1) for _ in range(rows + 1)]
        for i in range(rows - 1, -1, -1):
            for j in range(cols - 1, -1, -1):
                apples[i][j] = (pizza[i][j] == 'A') + apples[i + 1][j] + apples[i][j + 1] - apples[i + 1][j + 1]

        # Initialize the base case for the DP
        dp = [[[0] * cols for _ in range(rows)] for _ in range(k)]
        for i in range(rows):
            for j in range(cols):
                if apples[i][j] > 0:
                    dp[0][i][j] = 1

        # Calculate the DP for each remaining cut
        for s in range(1, k):
            for i in range(rows):
                for j in range(cols):
                    # Calculate the number of ways to cut horizontally
                    for r in range(i + 1, rows):
                        if apples[i][j] - apples[r][j] > 0:
                            dp[s][i][j] = (dp[s][i][j] + dp[s - 1][r][j]) % MOD

                    # Calculate the number of ways to cut vertically
                    for c in range(j + 1, cols):
                        if apples[i][j] - apples[i][c] > 0:
                            dp[s][i][j] = (dp[s][i][j] + dp[s - 1][i][c]) % MOD

        return dp[k - 1][0][0]