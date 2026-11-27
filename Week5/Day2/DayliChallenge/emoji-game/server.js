
const express = require('express');
const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Liste des emojis
const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🚗', name: 'Car' },
    { emoji: '🐱', name: 'Cat' },
    { emoji: '🌞', name: 'Sun' },
    { emoji: '⚽', name: 'Football' },
    { emoji: '🍎', name: 'Apple' },
    { emoji: '🐸', name: 'Frog' }
];

// Stockage du score et du classement
let score = 0;
let leaderboard = [];

// Générer une question aléatoire
function generateQuestion() {

    // Choisir un emoji aléatoire
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const correctEmoji = emojis[randomIndex];

    // Sélectionner 3 mauvaises réponses
    const wrongOptions = emojis
        .filter(item => item.name !== correctEmoji.name)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    // Ajouter la bonne réponse
    const options = [...wrongOptions, correctEmoji]
        .sort(() => Math.random() - 0.5);

    return {
        emoji: correctEmoji.emoji,
        options: options.map(item => item.name),
        correctAnswer: correctEmoji.name
    };
}

// Route pour récupérer une question
app.get('/api/question', (req, res) => {

    const question = generateQuestion();

    res.json(question);
});

// Route pour vérifier la réponse
app.post('/api/guess', (req, res) => {

    const { guess, correctAnswer, playerName } = req.body;

    if (!guess || !correctAnswer) {
        return res.status(400).json({
            message: 'Missing answer'
        });
    }

    const isCorrect = guess === correctAnswer;

    if (isCorrect) {
        score++;
    }

    // Enregistrer le score du joueur
    if (playerName) {
        const existingPlayer = leaderboard.find(
            player => player.name === playerName
        );

        if (existingPlayer) {
            existingPlayer.score = score;
        } else {
            leaderboard.push({
                name: playerName,
                score: score
            });
        }
    }

    res.json({
        correct: isCorrect,
        correctAnswer: correctAnswer,
        score: score,
        message: isCorrect
            ? 'Correct! Well done!'
            : 'Wrong answer! Try again!'
    });
});

// Route pour afficher le classement
app.get('/api/leaderboard', (req, res) => {

    const topPlayers = [...leaderboard]
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);

    res.json(topPlayers);
});

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
