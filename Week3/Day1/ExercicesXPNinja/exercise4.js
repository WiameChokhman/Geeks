function biggestNumberInArray(arrayNumber) {
    if (arrayNumber.length === 0) {
        return 0;
    }

    let biggest = arrayNumber[0];

    for (let i = 1; i < arrayNumber.length; i++) {
        if (typeof arrayNumber[i] === "number" && arrayNumber[i] > biggest) {
            biggest = arrayNumber[i];
        }
    }

    return biggest;
}

const array = [-1, 0, 3, 100, 99, 2, 99];
const array2 = ['a', 3, 4, 2];
const array3 = [];

console.log(biggestNumberInArray(array));  // 100
console.log(biggestNumberInArray(array2)); // 4
console.log(biggestNumberInArray(array3)); // 0