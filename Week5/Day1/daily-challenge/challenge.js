
const greet = require('./greeting.js');
const colorfulMessage = require('./colorful-message.js');
const readFile = require('./read-file.js');

// 1. Greeting
console.log(greet('Wiame'));

// 2. Colorful message
colorfulMessage();

// 3. Read file content
console.log('\nFile Content:');
readFile();
