function abbrevName(name) {
    let words = name.split(" ");

    return words[0] + " " + words[1].charAt(0) + ".";
}

console.log(abbrevName("Robin Singh")); // Robin S.