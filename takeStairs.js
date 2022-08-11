/* You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?*/

var climbStairs = function(n) {
    let cache = {};
     
     return takeStairs(n, cache)
 };
 
 function takeStairs(n, cache) {
     if (n <= 0) return 0;
     if (n === 1) return 1;
     if (n === 2) return 2;
     if (n > 45) return "Too many stayrs!";
     if ( cache[n]) {
         return cache[n];
     }
     cache[n] = takeStairs(n - 1, cache) + takeStairs(n - 2, cache);
     return cache[n];
 };