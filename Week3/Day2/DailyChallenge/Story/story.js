
let form = document.getElementById("libform");
let story = document.getElementById("story");
let shuffleButton = document.getElementById("shuffle-button");

// Tableau des histoires
let stories = [
    function(noun, adjective, person, verb, place) {
        return `One day, a ${adjective} ${noun} saw ${person} trying to ${verb} in ${place}.`;
    },

    function(noun, adjective, person, verb, place) {
        return `Yesterday, ${person} found a ${adjective} ${noun} in ${place}. The ${noun} wanted to ${verb}!`;
    },

    function(noun, adjective, person, verb, place) {
        return `Everyone in ${place} was surprised when ${person} decided to ${verb} with a ${adjective} ${noun}.`;
    },

    function(noun, adjective, person, verb, place) {
        return `A ${adjective} ${noun} followed ${person} to ${place}, hoping to ${verb} all day!`;
    }
];

// Mémoriser les mots saisis
let words = {};

// Générer une histoire aléatoire
function generateStory() {
    let randomIndex = Math.floor(Math.random() * stories.length);

    story.textContent = stories[randomIndex](
        words.noun,
        words.adjective,
        words.person,
        words.verb,
        words.place
    );
}

// Soumission du formulaire
form.addEventListener("submit", function(event) {
    event.preventDefault();

    words.noun = document.getElementById("noun").value.trim();
    words.adjective = document.getElementById("adjective").value.trim();
    words.person = document.getElementById("person").value.trim();
    words.verb = document.getElementById("verb").value.trim();
    words.place = document.getElementById("place").value.trim();

    // Vérifier que tous les champs sont remplis
    if (
        words.noun === "" ||
        words.adjective === "" ||
        words.person === "" ||
        words.verb === "" ||
        words.place === ""
    ) {
        alert("Please fill in all the fields!");
        return;
    }

    generateStory();

    // Afficher le bouton Shuffle
    shuffleButton.hidden = false;
});

// Changer l'histoire sans perdre les mots
shuffleButton.addEventListener("click", function() {
    generateStory();
});
