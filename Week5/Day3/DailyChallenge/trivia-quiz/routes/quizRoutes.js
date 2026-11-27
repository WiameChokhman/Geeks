
const express = require("express");
const router = express.Router();

const triviaQuestions = require("../models/quiz");

// Variables pour suivre la progression du quiz
let currentQuestionIndex = 0;
let score = 0;

// GET /quiz : commencer le quiz
router.get("/", (req, res) => {

    // Réinitialiser le quiz
    currentQuestionIndex = 0;
    score = 0;

    res.json({
        message: "Welcome to the Trivia Quiz!",
        question: triviaQuestions[currentQuestionIndex].question,
        questionNumber: currentQuestionIndex + 1,
        totalQuestions: triviaQuestions.length
    });
});


// POST /quiz : soumettre une réponse
router.post("/", (req, res) => {

    const userAnswer = req.body.answer;

    // Vérifier si une réponse est fournie
    if (!userAnswer) {
        return res.status(400).json({
            message: "Please provide an answer."
        });
    }

    // Récupérer la question actuelle
    const currentQuestion = triviaQuestions[currentQuestionIndex];

    // Vérifier la réponse
    const isCorrect =
        userAnswer.trim().toLowerCase() ===
        currentQuestion.answer.toLowerCase();

    if (isCorrect) {
        score++;
    }

    // Feedback
    const feedback = isCorrect
        ? "Correct answer!"
        : `Incorrect! The correct answer is ${currentQuestion.answer}.`;

    // Passer à la question suivante
    currentQuestionIndex++;

    // Vérifier si le quiz est terminé
    if (currentQuestionIndex >= triviaQuestions.length) {
        return res.json({
            feedback: feedback,
            message: "Quiz completed!",
            score: score,
            totalQuestions: triviaQuestions.length,
            scoreRoute: "/quiz/score"
        });
    }

    // Afficher la question suivante
    res.json({
        feedback: feedback,
        nextQuestion: triviaQuestions[currentQuestionIndex].question,
        questionNumber: currentQuestionIndex + 1,
        totalQuestions: triviaQuestions.length
    });
});


// GET /quiz/score : afficher le score final
router.get("/score", (req, res) => {

    res.json({
        message: "Your final score is:",
        score: score,
        totalQuestions: triviaQuestions.length
    });
});

module.exports = router;
