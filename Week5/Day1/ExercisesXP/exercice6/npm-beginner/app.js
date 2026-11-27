
const chalk = require('chalk');

// Afficher des messages colorés
console.log(chalk.green("Hello World!"));

console.log(chalk.red("This is a red message"));

console.log(chalk.blue("This is a blue message"));

// Utiliser des styles
console.log(chalk.bold("This message is bold"));

console.log(chalk.underline("This message is underlined"));

// Combiner les styles
console.log(chalk.bold.green("Success! Your project is running."));
console.log(chalk.bold.yellow("Warning! Be careful."));
console.log(chalk.bold.red("Error! Something went wrong."));
