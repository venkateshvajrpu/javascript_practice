var TimeLimitedCache = function() {
    this.mapArray = new Map()
    console.log("map initialized", this.mapArray)
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    console.log("duration called", duration, this.mapArray.has(key), this.timeOut)
    let returnValue = this.mapArray.has(key)
    this.mapArray.set(key,value, duration)
    return returnValue
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    console.log("get value", key, this.mapArray)
    if(this.mapArray.has(key)) {
        return this.mapArray.get(key)
    } else {
        return -1
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    console.log("count value", this.mapArray, this.mapArray.size)
    return this.mapArray.size
};


 const timeLimitedCache = new TimeLimitedCache()
 console.log("time", performance.now())
 timeLimitedCache.set(1, 42, 50); // false
 setTimeout(()=>{
     console.log("time", performance.now())
     timeLimitedCache.set(1, 50, 100); // false
 },40)

 setTimeout(()=>{
    console.log("time", performance.now())
    timeLimitedCache.set(2, 40, 100); // false
},50)

 setTimeout(() => {
     console.log("time", performance.now())
     timeLimitedCache.get(1) // 42
 }, 50);

 setTimeout(() => {
    console.log("time", performance.now())
    timeLimitedCache.get(2) // 42
}, 60);

 setTimeout(() => {
     console.log("time", performance.now())
    timeLimitedCache.get(1) // 42
}, 60);

setTimeout(() => {
    console.log("time", performance.now())
    timeLimitedCache.get(1) // 42
}, 140);

setTimeout(() => {
    timeLimitedCache.count() // 1
}, 200);
 