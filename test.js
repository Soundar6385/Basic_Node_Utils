const {
    capitalize, isEmpty, debounce, throttle, deepClone,
    randomInt, toKebabCase, uniqueArray, isEqual
} = require('./src');

console.log(capitalize("hello world")); // Hello world
console.log(isEmpty([]));               // true
console.log(isEmpty("text"));           // false

// Test randomInt
console.log(randomInt(1, 10));          // Random number between 1 and 10

// Test toKebabCase
console.log(toKebabCase("Hello World Example")); // hello-world-example

// Test uniqueArray
console.log(uniqueArray([1, 2, 2, 3, 4, 4]));   // [1, 2, 3, 4]

// Test deepClone
const obj = { a: 1, b: { c: 2 } };
const clonedObj = deepClone(obj);
console.log(clonedObj);                // { a: 1, b: { c: 2 } }
console.log(clonedObj === obj);        // false

// Test isEqual
console.log(isEqual({ a: 1 }, { a: 1 }));   // true
console.log(isEqual({ a: 1 }, { b: 1 }));   // false
