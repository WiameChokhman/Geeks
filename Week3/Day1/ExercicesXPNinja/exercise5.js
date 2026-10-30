function uniqueElements(array) {
    let newList = [];

    for (let i = 0; i < array.length; i++) {
        if (!newList.includes(array[i])) {
            newList.push(array[i]);
        }
    }

    return newList;
}

let list = [1, 2, 3, 3, 3, 3, 4, 5];

console.log(uniqueElements(list));