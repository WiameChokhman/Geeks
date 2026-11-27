
// 1. Importer Express
const express = require('express');

// 2. Créer une application Express
const app = express();

// 3. Définir le port
const PORT = 3000;

// 4. Middleware pour lire les données JSON
app.use(express.json());

// 5. Simuler une base de données
let data = [
    {
        id: 1,
        title: "Introduction to Node.js",
        content: "Node.js is a JavaScript runtime."
    },
    {
        id: 2,
        title: "Learning Express",
        content: "Express is a web framework for Node.js."
    }
];

// ------------------------------------
// GET /posts : récupérer tous les posts
// ------------------------------------
app.get('/posts', (req, res) => {
    res.status(200).json(data);
});

// ------------------------------------
// GET /posts/:id : récupérer un post
// ------------------------------------
app.get('/posts/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const post = data.find(post => post.id === id);

    if (!post) {
        return res.status(404).json({
            message: "Post not found"
        });
    }

    res.status(200).json(post);
});

// ------------------------------------
// POST /posts : créer un nouveau post
// ------------------------------------
app.post('/posts', (req, res) => {

    const { title, content } = req.body;

    // Vérifier les données reçues
    if (!title || !content) {
        return res.status(400).json({
            message: "Title and content are required"
        });
    }

    // Créer un nouveau post
    const newPost = {
        id: data.length > 0
            ? Math.max(...data.map(post => post.id)) + 1
            : 1,
        title: title,
        content: content
    };

    // Ajouter le post au tableau
    data.push(newPost);

    res.status(201).json({
        message: "Post created successfully",
        post: newPost
    });
});

// ------------------------------------
// PUT /posts/:id : modifier un post
// ------------------------------------
app.put('/posts/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const post = data.find(post => post.id === id);

    if (!post) {
        return res.status(404).json({
            message: "Post not found"
        });
    }

    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({
            message: "Title and content are required"
        });
    }

    // Modifier les propriétés du post
    post.title = title;
    post.content = content;

    res.status(200).json({
        message: "Post updated successfully",
        post: post
    });
});

// ------------------------------------
// DELETE /posts/:id : supprimer un post
// ------------------------------------
app.delete('/posts/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const index = data.findIndex(post => post.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Post not found"
        });
    }

    // Supprimer le post
    const deletedPost = data.splice(index, 1);

    res.status(200).json({
        message: "Post deleted successfully",
        post: deletedPost[0]
    });
});

// ------------------------------------
// Gestion des routes inexistantes
// ------------------------------------
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

// ------------------------------------
// Gestion des erreurs serveur
// ------------------------------------
app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        message: "Internal Server Error"
    });
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
