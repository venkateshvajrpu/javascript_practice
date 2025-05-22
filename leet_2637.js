/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    // const ft = function(n){
    //     console.log('function start', n)
    //     return fn(...n)
    // }
    return async function(...args) {
        return new Promise(async (resolve, reject)=>{
            try{
                let eOut;
                console.log("inputs", fn, t, ...args)
                const a = fn(...args)
                const b = new Promise((res,reject)=> {
                    eOut = setTimeout(()=> {
                        console.log("rejected")
                        reject("Time Limieted Exceeded")
                    }, t)
                })
                await Promise.race([a,b]).then((res)=>{
                    console.log('res --->', res)
                    resolve(res)
                }).catch((error)=>{
                    console.log("error inner layer", error)
                    reject(error)
                })
                .finally(()=>{
                    console.log("set time out")
                    clearTimeout(eOut)
                })
            }catch(error){
                console.log("error in", error)
                reject(error)
            }
        })
    }
};
const t = 50
const args = [50]
// const fn = async (a, b) => { 
//     console.log("func start")
//     await new Promise(res => setTimeout(res, 120)); 
//     console.log("after time out ", a, b)
//     return a + b; 
// }
// const limited = timeLimit(fn, t)
// const limited = timeLimit( async (a, b) => { 
//     await new Promise((res) => {
//         console.log("return in", a, b)
//         setTimeout(res, 120)
//     }); 
//     return a + b; 
//   }, t)
// const limited = timeLimit( async (n) => { 
//     await new Promise((res) => {
//         console.log("return in", n)
//         setTimeout(res, 100)}); 
//     return n * n; 
//   }, t)
 const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 limited(args).then((res)=>{
    console.log("res >>>>", res)
 }).catch(console.log) // "Time Limit Exceeded" at t=100ms
 