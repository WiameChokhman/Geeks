// In js Each array is a different object in memory. Even though they contain the same value, they are not the same reference.
//console.log([2] === [2]); // false
//console.log({} === {}); // false

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

//En JavaScript, l’affectation d’un objet copie sa référence, pas l’objet lui-même.
object1.number = 4;
console.log(object2.number) //4
console.log(object3.number) //4
console.log(object4.number) //5

// 1. Create the Animal class
class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

// 2. Create the Mammal class
class Mammal extends Animal {
    sound(sound) {
        return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
}

// 3. Create the farmerCow object
const farmerCow = new Mammal("Lily", "cow", "brown and white");

console.log(farmerCow.sound("Moooo"));