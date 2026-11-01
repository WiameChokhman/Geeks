// Pers 1
let person1 = {
    FullName: "John",
    Mass: 80,
    Height: 1.80,

    calculateBMI: function() {
        return this.Mass / (this.Height * this.Height);
    }
};

// Pers 2
let person2 = {
    FullName: "Mark",
    Mass: 90,
    Height: 1.75,

    calculateBMI: function() {
        return this.Mass / (this.Height * this.Height);
    }
};

function compareBMI(person1, person2) {

    let bmi1 = person1.calculateBMI();
    let bmi2 = person2.calculateBMI();

    if (bmi1 > bmi2) {
        console.log(person1.FullName + " has the largest BMI.");
    } 
    else if (bmi2 > bmi1) {
        console.log(person2.FullName + " has the largest BMI.");
    } 
    else {
        console.log("Both persons have the same BMI.");
    }
}

compareBMI(person1, person2);