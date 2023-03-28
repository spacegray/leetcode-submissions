/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
function mincostTickets(days, costs) {
    const dp = new Array(366).fill(0);
    const travelDays = new Set(days);
    
    for (let i = 1; i <= 365; i++) {
        if (!travelDays.has(i)) {
            // If we don't need to travel on this day,
            // the cost is the same as the cost of not
            // traveling on the previous day
            dp[i] = dp[i-1];
        } else {
            // We need to travel on this day, so we need to
            // choose the cheapest option among the three
            // possible options: buying a 1-day pass, a 7-day
            // pass, or a 30-day pass. We can use the values
            // of dp[i-1], dp[i-7], and dp[i-30] to compute
            // the cost of each option.
            dp[i] = Math.min(
                dp[i-1] + costs[0],
                (i >= 7 ? dp[i-7] : 0) + costs[1],
                (i >= 30 ? dp[i-30] : 0) + costs[2]
            );
        }
    }
    
    return dp[365];
}
