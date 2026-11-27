
const axios = require('axios');

// Fonction pour récupérer tous les posts
const fetchPosts = async () => {

    // Envoyer une requête GET vers JSONPlaceholder
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
    );

    // Retourner uniquement les données reçues
    return response.data;
};

// Exporter la fonction
module.exports = { fetchPosts };
