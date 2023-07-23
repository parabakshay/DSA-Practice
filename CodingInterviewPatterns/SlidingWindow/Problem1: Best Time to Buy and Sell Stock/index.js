/*
Problem Statement:
Given an array where the element at the index i represents the price of a stock on day i, find the maximum profit that you can gain by buying the stock once and then selling it.
Note: Stock can only be purchased on a single day and sold on a different day. If no profit can be achieved, we return zero.

Constraints:
* We can’t sell before buying a stock, that is, the array index at which stock is bought will always be less than the index at which the stock is sold.
* 1 <= prices.length <= 10^5
* 0 <= prices[i] <= 10^5
*/

const maxProfit = (prices) => {
    let left = 0;
    let right = 1;
    let max_profit = 0;
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];
            max_profit = Math.max(max_profit, profit);
        } else {
            left = right;
        }
        right++;
    }
    return max_profit;
};

const main = () => {
    let prices = [10, 4, 11, 1, 5];
    console.log(maxProfit(prices));
}

main();