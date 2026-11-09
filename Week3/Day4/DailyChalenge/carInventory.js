// Chaque voiture est décrite par son identifiant, sa marque, son modèle et son année.
const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

// On cherche la première Honda présente dans l'inventaire.
function getCarHonda(carInventory) {

    const car = carInventory.find(car => car.car_make === "Honda");

    // On compose une phrase avec les informations de la voiture trouvée.
    return `This is a ${car.car_make} ${car.car_model} from ${car.car_year}`;
}

// Affiche les informations de la première Honda : l'Accord de 1983.
console.log(getCarHonda(inventory));

// On classe les voitures de la plus ancienne à la plus récente.
function sortCarInventoryByYear(carInventory) {
    // sort modifie directement le tableau reçu, puis le renvoie.
    return carInventory.sort((a, b) => a.car_year - b.car_year);
}

// Affiche l'inventaire trié par année, de 1983 à 2010.
console.log(sortCarInventoryByYear(inventory));