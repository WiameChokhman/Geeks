const people = ["Greg", "Mary", "Devon", "James"];

// 1. Remove "Greg" from the array
people.splice(people.indexOf("Greg"), 1);
console.log(people);

// 2. Replace "James" with "Jason"
people[people.indexOf("James")] = "Jason";
console.log(people);

// 3. Add your name to the end of the array
people.push("Wiame");
console.log(people);

// 4. Display Mary's index
console.log(people.indexOf("Mary"));

// 5. Make a copy without "Mary" or your name
const copy = people.slice(1, 3);
console.log(copy);

// 6. Find the index of "Foo"
// retourne -1 car la méthode par défaut renvoie -1 pour indiquer qu’aucun élément correspondant n’a été trouvé
console.log(people.indexOf("Foo"));

// 7. Get the last element of the array
// En JS les ndice commence par 0 alors c'est normale que dernier element son indice et longueur du tableau - 1
const last = people[people.length - 1];
console.log(last);

// partie II:
// Question 1 
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

//Question 2:

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);

    if (people[i] === "Devon") {
        break;
    }
}