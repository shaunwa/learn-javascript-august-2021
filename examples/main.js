const generateFibonacci = require('./fibonacci');

const howMany = process.argv[2];

console.log(generateFibonacci(howMany));