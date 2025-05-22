/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let c = 1
    console.log('c',c, fn)
    return function(...args){
        console.log(c,'args', args, "..args", ...args)
        if(c == 1) {
            c += 1
            return fn(args)
        }
        // return [{"calls" : c, "value" : t}]
    }
};


 let fn = (a,b,c) => {
    console.log(a,b,c)
    return (a + b + c)
 }
 console.log("install", once(fn))
 let onceFn = once(fn)
 
 console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // returns undefined without calling fn
 
