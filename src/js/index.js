require("babel-polyfill");

// Below is javascript written in ES2015. Babel will transpile it
let numbers = [1, 2, 3, 4];

numbers.forEach( number => {
  console.log(number * 2);
});

// Now we will use the babel-polyfill
console.log(Array.from('foo'));
