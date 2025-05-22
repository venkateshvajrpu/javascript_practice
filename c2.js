/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    console.log(arr, fn)
    return ((arr, fn) => { 
        const a =[]
        console.log("arr", arr, fn)
        for(let i = 0; i < arr.length; i++) {
            a.push(fn(arr[i]))
        }
        return a
    })(arr, fn)
};

console.log(map([1,2,3], (x) => x * 2))