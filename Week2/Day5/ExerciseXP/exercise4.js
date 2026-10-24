const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
};

// The number of floors
console.log(building.numberOfFloors);

// The number of apartments on floors 1 and 3
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);

// The second tenant and the number of rooms
console.log(building.nameOfTenants[1]);
//toLowerCase() pour correspondre à la clé de l'objet
const secondTenant = building.nameOfTenants[1].toLowerCase();
console.log(building.numberOfRoomsAndRent[secondTenant][0]);

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent.
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}

console.log(building.numberOfRoomsAndRent.dan[1]);