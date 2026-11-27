
// Importer les fonctions
const { readFile, writeFile } = require('./fileManager');

// Lire le fichier Hello World.txt
console.log("Reading Hello World.txt:");
readFile('Hello World.txt');

// Écrire dans Bye World.txt
writeFile('Bye World.txt', 'Writing to the file');
