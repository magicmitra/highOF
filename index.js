const flatten = require('./src/flatten');
const ownLoop = require('./src/ownLoop');
const everything = require('./src/everything');

const matrix = [[1, 2, 3], [4, 5], [6]];
console.log(flatten.flatten(matrix));

ownLoop.ownLoop(3, n => n > 0, n => n - 1, console.log);

console.log(everything.every([2, 4, 16], n => n < 10));