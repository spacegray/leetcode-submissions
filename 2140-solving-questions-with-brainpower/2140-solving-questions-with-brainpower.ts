function mostPoints(questions: number[][]): number {
    const dp: number[] = new Array(questions.length).fill(0);

    function calculate(index: number): number {
        if (index >= questions.length) {
            return 0;
        }

        if (dp[index] !== 0) {
            return dp[index];
        }

        dp[index] = Math.max(
            questions[index][0] + calculate(questions[index][1] + index + 1),
            calculate(index + 1)
        );

        return dp[index];
    }

    return calculate(0);
}
