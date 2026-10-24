
//Méthode 1
console.log("Méthode 1: ")
let pt = "";

for (let i = 1; i <= 6; i++) {
    pt += "* ";
    console.log(pt);
}

//Méthode 2
console.log("Méthode 2: ")

for (let i = 1; i <= 6; i++) {
    let etoile = "";

    for (let j = 1; j <= i; j++) {
        etoile += "* ";
    }

    console.log(etoile);
}