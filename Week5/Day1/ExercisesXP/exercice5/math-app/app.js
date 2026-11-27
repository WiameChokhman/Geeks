
// Importer Lodash
const _ = require('lodash');

// Importer notre module math
const { addition, multiplication } = require('./math');

// Utiliser les fonctions du module math
const sum = addition(10, 5);
const product = multiplication(10, 5);

console.log("Addition:", sum);
console.log("Multiplication:", product);

// Utiliser Lodash
const numbers = [10, 5, 20, 15, 30];

// Calculer la somme avec Lodash
const total = _.sum(numbers);

// Trouver le nombre maximum avec Lodash
const maximum = _.max(numbers);

console.log("Sum using Lodash:", total);
console.log("Maximum using Lodash:", maximum);
