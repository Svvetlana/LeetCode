/* You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.*/

var minCostClimbingStairs = function(cost) {
    let array = cost.slice(0, 2);
    
    for (let i = 2; i < cost.length; i++) {
        [array[0], array[1]] = [array[1], array[0]];
        array[1] = Math.min(array[0], array[1]) + cost[i];
    }
    return array[0] > array[1] ? array[1] : array[0];
};