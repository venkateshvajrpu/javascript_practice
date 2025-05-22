// Memoization
// Stores the result of a function call to avoid recomputation.

function memoize(fn) {
  const cache = {};
  console.log('init', cache)
  return function(x) {
    console.log(x, "in init", cache)
    if (x in cache) return cache[x];
    cache[x] = fn(x);
    return cache[x];
  };
}

const slowSquare = (n) => {
  console.log("Computing...");
  return n * n;
};

console.log("install", memoize(slowSquare))
const fastSquare = memoize(slowSquare);
console.log(fastSquare(4)); // Computes
console.log(fastSquare(4)); // Cached
