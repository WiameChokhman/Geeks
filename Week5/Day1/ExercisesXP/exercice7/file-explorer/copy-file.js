
const fs = require('fs');

// Lire le contenu du fichier source
fs.readFile('source.txt', 'utf8', (err, data) => {

    if (err) {
        console.log("Error reading file:", err);
        return;
    }

    console.log("Source file content:");
    console.log(data);

    // Écrire le contenu dans destination.txt
    fs.writeFile('destination.txt', data, (err) => {

        if (err) {
            console.log("Error writing file:", err);
            return;
        }

        console.log("File copied successfully!");
    });
});
