
const fs = require('fs');

// Lire le contenu du dossier actuel
fs.readdir('.', (err, files) => {

    if (err) {
        console.log("Error reading directory:", err);
        return;
    }

    console.log("Files in the directory:");

    files.forEach(file => {
        console.log(file);
    });
});
