/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // create a variable to store the max profit
    let maxProfit = 0;
    // iterate through the prices array
    for (let i = 0; i < prices.length; i++) {
        // check if the current price is less than the next price
        if (prices[i] < prices[i + 1]) {
            // add the difference to the max profit
            maxProfit += prices[i + 1] - prices[i];
        }
    }
    // return the max profit
    return maxProfit;
}