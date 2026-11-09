//Exercice1 print Full Name
function printFullName(person) {
    return `Your full name is ${person.first} ${person.last}`;
}

console.log(printFullName({first: 'Elie', last: 'Schoppik'}));

//Exercise 2 : keys and values

function keysAndValues(obj) {

    // Get the keys and sort them alphabetically
    const keys = Object.keys(obj).sort();

    // Get the corresponding values
    const values = keys.map(key => obj[key]);

    return [keys, values];
}

// Tests
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));

console.log(keysAndValues({
    a: "Apple",
    b: "Microsoft",
    c: "Google"
}));

console.log(keysAndValues({
    key1: true,
    key2: false,
    key3: undefined
}));

//Exercise 3 : Counter class

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

// Output est  3 : les deux appels sur counterOne ajoutent 2, puis celui sur counterTwo ajoute 1.
// counterTwo et counterOne désignent le même objet, donc ils partagent la même propriété count.
console.log(counterOne.count);