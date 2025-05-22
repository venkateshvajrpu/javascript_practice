const fn = (x) => x * 5;
 const args = [2], t = 20, cancelTimeMs = 50;
 
 const start = performance.now();
 const result = [];
 
 const log = (...argsArr) => {
 const diff = Math.floor(performance.now() - start);
 result.push({"time": diff, "returned": fn(...argsArr)});
 }

 var cancellable = function(fn, args, t) {
    console.log("cancellable fn", fn, args, t)
    const c = performance.now()
    const id =  setTimeout((()=>{
        console.log("args inside", fn, args)
        return fn(args)
    }), t)

    return function() {
        console.log("function return",id)
        if(id) {
            return id
        } else {
            clearInterval(id)
            return []
        }
    }
};

const cancel = cancellable(log, args, t);

console.log("cancel fn", cancel)

console.log("cancell fn", setTimeout(cancel, cancelTimeMs));

console.log("result")
