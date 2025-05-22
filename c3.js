function greet(name) {
    return `Hello, ${name}`;
  }
  
  function loud(fn) {
    return function(...args) {
      return fn(...args).toUpperCase();
    };
  }
  console.log("initall", loud(greet))
  const loudGreet = loud(greet);
  console.log(loudGreet("Alice")); // "HELLO, ALICE"
  console.log(loudGreet("jam"))
  