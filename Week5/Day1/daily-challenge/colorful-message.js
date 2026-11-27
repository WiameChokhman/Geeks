
const chalk = require('chalk');

function colorfulMessage() {
    console.log(chalk.green.bold('Welcome to my Daily Challenge!'));
    console.log(chalk.blue('Learning Node.js is fun!'));
    console.log(chalk.yellow('Keep practicing!'));
}

// Exporter la fonction
module.exports = colorfulMessage;
