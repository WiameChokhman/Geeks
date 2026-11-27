
const fs = require('fs');
const path = require('path');

function readFile() {

    // Construire le chemin du fichier
    const filePath = path.join(__dirname, 'files', 'file-data.txt');

    // Lire le contenu du fichier
    const content = fs.readFileSync(filePath, 'utf8');

    // Afficher le contenu
    console.log(content);
}

// Exporter la fonction
module.exports = readFile;
