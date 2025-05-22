/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn(...args);
        }, t);
    }
};


const log = debounce(console.log, 150);
setTimeout(() => {
    // console.log('time of call', Date.now())
    log(['Hello 1']); // Logged at t=100ms
}, 50);
setTimeout(() => {
    // console.log('time of call', Date.now())
    log(['Hello 2']); // Logged at t=100ms
}, 300);
setTimeout(() => {
    // console.log('time of call', Date.now())
    log(['Hello 3']); // Logged at t=100ms
}, 300);

