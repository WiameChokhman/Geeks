let number = prompt("Enter a number:");
number = Number(number);

// Continue asking while the number is smaller than 10
while (number < 10) {
    number = Number(prompt("Enter a new number:"));
}

// la boucle while car dans ca cas on ne connaît pas à l'avance le nombre d'itérations

console.log("Your number is:", number);