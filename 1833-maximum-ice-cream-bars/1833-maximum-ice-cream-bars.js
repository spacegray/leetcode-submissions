/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let result = 0;
    // Sort the costs in ascending order
    let sortedCosts = costs.sort((a, b) => a - b);
    for (let i = 0; i < sortedCosts.length; i++) {
         // If the current cost is less than or equal to the coins, 
        // subtract the cost from the coins and increment the result
        if (coins >= sortedCosts[i]) {
            coins -= sortedCosts[i];
            result++;
        }
    }
    return result;
};