/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    console.log("cancellable fn", fn, args, t)
    const c = performance.now()
    const id =  setTimeout((()=>{   
        console.log("args inside", fn, args)
        return fn(...args)
    }), t)

    return function() {
        console.log("function return",c, performance.now(), t)
        if(Math.floor(performance.now() - c) > t) {
            return id
        } else {
            clearInterval(id)
            return []
        }
    }
};


 const result = [];
 
 const fn = (x) => x * 5;
 const args = [2,4], t = 20, cancelTimeMs = 50;
 
 const start = performance.now();
 
 const log = (...argsArr) => {
    console.log("fn inside", argsArr)
 const diff = Math.floor(performance.now() - start);
 result.push({"time": diff, "returned": fn(...argsArr)});
 }
     
 const cancel = cancellable(log, args, t);
 
 const maxT = Math.max(t, cancelTimeMs);
         
 console.log("finally", setTimeout(cancel, cancelTimeMs));

 console.log("last final", setTimeout(() => {
  console.log("result",result); // [{"time":20,"returned":10}]
 }, maxT + 15))
