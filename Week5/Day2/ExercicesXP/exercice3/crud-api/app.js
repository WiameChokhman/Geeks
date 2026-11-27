
const express = require('express');

// Importer le module dataService
const dataService = require('./data/dataService');

// Créer une application Express
const app = express();

// Définir le port
const PORT = 5000;

// Créer une route GET pour récupérer les posts
app.get('/posts', async (req, res) => {

    try {
        // Appeler la fonction fetchPosts
        const posts = await dataService.fetchPosts();

        // Envoyer les données au client
        res.status(200).json(posts);

        console.log('Data successfully retrieved and sent!');

    } catch (error) {

        // Gérer les erreurs
        console.error('Error fetching posts:', error.message);

        res.status(500).json({
            message: 'Error retrieving posts'
        });
    }

});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
