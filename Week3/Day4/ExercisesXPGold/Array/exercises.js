// Exercise 1 : map crée un nouveau tableau en transformant chaque élément.
[1, 2, 3].map(num => {
  // Chaque élément est un nombre, donc on le multiplie par 2.
  if (typeof num === 'number') return num * 2;
  // Si ce n'est pas un nombre, cette branche renvoie undefined.
  return ;
});

// Résultat : [2, 4, 6].

//**************************************************
// Exercise 2 : reduce rassemble les éléments dans un seul accumulateur.
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    // Ajoute les éléments du tableau courant à l'accumulateur.
    return acc.concat(cur);
  },
  // Valeur initiale de l'accumulateur.
  [1, 2],
);

// Résultat : [1, 2, 0, 1, 2, 3].

// Exercise 3 : map reçoit la valeur et l'index de chaque élément.
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    // i commence à 0 et augmente de 1 à chaque élément.
    console.log(num, i);
    // Affiche une boîte de dialogue pour chaque élément.
    alert(num);
    // La valeur correspondante dans le nouveau tableau est doublée.
    return num * 2;
})
// newArray vaut [2, 4, 8, 10, 16, 18].

//Exercise 4 : Nested arrays
//Question 1
const array = [[1], [2], [3], [[[4]]], [[[5]]]];

const result1 = array.flat(2);

console.log(result1);

//Question2
const greeting = [
    ["Hello", "young", "grasshopper!"],
    ["you", "are"],
    ["learning", "fast!"]
];

const result2 = greeting.map(sentence => sentence.join(" "));

console.log(result2);

//Question3
const result3 = greeting.map(sentence => sentence.join(" ")).join(" ");

console.log(result3);

//Qusetion 4:
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

const result4 = trapped.flat(Infinity);

console.log(result4);