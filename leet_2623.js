// Memoize
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const c = {}
    return function (...args) {
        console.log(c,"init args", ...args)
        const key  = JSON.stringify(args)
        if(key in c) {
            return c[key]
        } else if(!c[key]) {
            console.log("if else", c)
            console.log("if case", c)
            c[key] = fn(...args)
            return c[key]
        } else {
            console.log("else", c)
            return Object.keys(c).length
        }
    }
}



let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
console.log(memoizedFn(0, 0)) // 5
console.log(memoizedFn(0, 0)) // 5
console.log(callCount) // 1 
