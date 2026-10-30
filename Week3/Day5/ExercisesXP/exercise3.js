// Promise with the value 3
Promise.resolve(3)
    .then(value => console.log(value));

//Promise with the string "Boo!"
Promise.reject("Boo!")
    .catch(error => console.log(error));