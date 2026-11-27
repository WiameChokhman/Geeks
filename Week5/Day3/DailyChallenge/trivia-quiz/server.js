
const express = require("express");
const app = express();

const quizRoutes = require("./routes/quizRoutes");

// Middleware pour lire les données JSON
app.use(express.json());

// Utiliser les routes du quiz
app.use("/quiz", quizRoutes);

// Démarrer le serveur
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
