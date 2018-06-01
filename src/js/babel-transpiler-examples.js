// Below are javascript snippets written in ES2015. With the help of babel,
// this will get transpiled to code the older browsers can understand.

// Example 1
// String interpolation
var name = "Bob", time = "today";

console.log(`Hello ${name}, how are you ${time}?`);


// Example 2
// Arrows functions =>
var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]


// Example 3
// Array.from() static method
// Note: this is an example of babel using polyfill to make Array.from work in IE
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
