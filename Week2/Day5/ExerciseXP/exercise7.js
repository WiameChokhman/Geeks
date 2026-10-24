const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let society = "";

for (let i = 0; i < names.length; i++) {
    society += names[i][0];
}

society = society.split("").sort().join("");

console.log(society);