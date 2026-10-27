const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
    let choice = index + 1;

    let suffix = (choice <= 3) ? ordinal[choice] : ordinal[0];

    console.log(`${choice}${suffix} choice is ${color}`);
});