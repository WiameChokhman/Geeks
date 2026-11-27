
const fs = require('fs');

// Fonction pour lire un fichier
function readFile(fileName) {
    const content = fs.readFileSync(fileName, 'utf8');
    console.log(content);
}

// Fonction pour écrire dans un fichier
function writeFile(fileName, content) {
    fs.writeFileSync(fileName, content);
    console.log("File written successfully!");
}

// Exporter les deux fonctions
module.exports = {
    readFile,
    writeFile
};
