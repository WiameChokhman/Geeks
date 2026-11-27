
const express = require('express');

// 1. Créer une application Express
const app = express();

// 2. Définir le port
const PORT = 5000;

// 3. Middleware pour récupérer les données JSON
app.use(express.json());

// 4. Tableau contenant les livres
let books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publishedYear: 1925
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        publishedYear: 1949
    },
    {
        id: 3,
        title: "The Alchemist",
        author: "Paulo Coelho",
        publishedYear: 1988
    }
];

// ------------------------------------
// GET /api/books : récupérer tous les livres
// ------------------------------------
app.get('/api/books', (req, res) => {

    res.status(200).json(books);

});

// ------------------------------------
// GET /api/books/:bookId : récupérer un livre
// ------------------------------------
app.get('/api/books/:bookId', (req, res) => {

    // Récupérer l'identifiant depuis l'URL
    const bookId = parseInt(req.params.bookId);

    // Rechercher le livre correspondant
    const book = books.find(book => book.id === bookId);

    // Vérifier si le livre existe
    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    // Retourner le livre trouvé
    res.status(200).json(book);

});

// ------------------------------------
// POST /api/books : ajouter un nouveau livre
// ------------------------------------
app.post('/api/books', (req, res) => {

    // Récupérer les données envoyées par le client
    const { title, author, publishedYear } = req.body;

    // Créer un nouvel objet livre
    const newBook = {
        id: books.length > 0
            ? Math.max(...books.map(book => book.id)) + 1
            : 1,
        title: title,
        author: author,
        publishedYear: publishedYear
    };

    // Ajouter le livre au tableau
    books.push(newBook);

    // Retourner le livre créé
    res.status(201).json(newBook);

});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
