
let currentQuestion = null;
let currentScore = 0;

// Récupérer une nouvelle question
async function loadQuestion() {

    const response = await fetch('/api/question');

    const data = await response.json();

    currentQuestion = data;

    // Afficher l'emoji
    document.getElementById('emoji').textContent = data.emoji;

    // Afficher les options
    const optionsDiv = document.getElementById('options');

    optionsDiv.innerHTML = '';

    data.options.forEach(option => {

        optionsDiv.innerHTML += `
            <label>
                <input type="radio" name="guess" value="${option}" required>
                ${option}
            </label>
            <br>
        `;
    });

    // Réinitialiser le feedback
    document.getElementById('feedback').textContent = '';

    document.getElementById('nextButton').hidden = true;
}

// Envoyer la réponse au serveur
document.getElementById('guessForm').addEventListener('submit', async function(event) {

    event.preventDefault();

    // Récupérer la réponse sélectionnée
    const selectedOption = document.querySelector(
        'input[name="guess"]:checked'
    );

    const guess = selectedOption.value;

    const playerName = document.getElementById('playerName').value || 'Guest';

    // Envoyer les données avec Fetch API
    const response = await fetch('/api/guess', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            guess: guess,
            correctAnswer: currentQuestion.correctAnswer,
            playerName: playerName
        })

    });

    const result = await response.json();

    // Afficher le feedback
    document.getElementById('feedback').textContent = result.message;

    // Mettre à jour le score
    currentScore = result.score;

    document.getElementById('score').textContent = currentScore;

    // Désactiver les options après la réponse
    document.querySelectorAll('input[name="guess"]').forEach(input => {
        input.disabled = true;
    });

    // Afficher le bouton suivant
    document.getElementById('nextButton').hidden = false;

    // Actualiser le classement
    loadLeaderboard();

});

// Passer à un nouvel emoji
document.getElementById('nextButton').addEventListener('click', () => {
    loadQuestion();
});

// Récupérer le classement
async function loadLeaderboard() {

    const response = await fetch('/api/leaderboard');

    const players = await response.json();

    const leaderboard = document.getElementById('leaderboard');

    leaderboard.innerHTML = '';

    players.forEach(player => {

        leaderboard.innerHTML += `
            <li>${player.name} - ${player.score} points</li>
        `;

    });
}

// Démarrer le jeu
loadQuestion();
loadLeaderboard();
