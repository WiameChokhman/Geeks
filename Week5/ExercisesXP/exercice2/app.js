
import persons from './data.js';

// Fonction pour calculer l'âge moyen
function calculateAverageAge(persons) {
    const totalAge = persons.reduce((sum, person) => {
        return sum + person.age;
    }, 0);

    const averageAge = totalAge / persons.length;

    console.log("Average age:", averageAge);
}

// Appeler la fonction
calculateAverageAge(persons);
