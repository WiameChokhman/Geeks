const family = {
    father: "Mohamed",
    mother: "Hassna",
    sister: "Wiame",
    brother: "Achraf"
};

// the keys
for (let member in family) {
    console.log(member);
}

// the values
for (let member in family) {
    console.log(family[member]);
}