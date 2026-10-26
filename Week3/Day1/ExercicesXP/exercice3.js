
function changeEnough(itemPrice, amountOfChange) {
    let total = 0;

    total += amountOfChange[0] * 0.25; // Quarters
    total += amountOfChange[1] * 0.10; // Dimes
    total += amountOfChange[2] * 0.05; // Nickels
    total += amountOfChange[3] * 0.01; // Pennies

    if (total >= itemPrice) {
        return true;
    } else {
        return false;
    }
}

//exemple
console.log(changeEnough(4.25, [25, 20, 5, 0]));
// true

console.log(changeEnough(14.11, [2, 100, 0, 0]));
// false

console.log(changeEnough(0.75, [0, 0, 20, 5]));
// true
