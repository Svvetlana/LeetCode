var lastStoneWeight = function(stones) {
    let y = 0; 
    let x = 0;
    stones.sort((a, b) => a - b);
    while (stones.length > 1) {
        y = stones.pop();
        x = stones.pop();
        stones.push(y - x);
        stones.sort((a, b) => a - b);
    }
    return stones[0];
};