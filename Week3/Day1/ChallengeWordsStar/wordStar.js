const input = prompt("Enter several words separated by commas:");

// Sépare les mots aux virgules et enlève les espaces autour de chacun.
const words = input.split(",").map(word => word.trim());

// Repère la longueur du mot le plus long pour que le cadre soit bien ajusté.
const maxLength = Math.max(...words.map(word => word.length));

// Prépare les bordures du haut et du bas, avec un peu d'espace autour des mots.
const border = "*".repeat(maxLength + 4);

console.log(border);
for (const word of words) {
  // Complète chaque mot avec des espaces pour aligner le bord droit.
  console.log(`* ${word.padEnd(maxLength)} *`);
}
console.log(border);