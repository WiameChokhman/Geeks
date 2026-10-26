
function hotelCost(nights) {
    return nights * 140;
}

function planeRideCost(destination) {
    destination = destination.trim().toLowerCase();

    if (destination === "london") {
        return 183;
    } else if (destination === "paris") {
        return 220;
    } else {
        return 300;
    }
}

function rentalCarCost(days) {
    let cost = days * 40;

    if (days > 10) {
        cost *= 0.95;
    }

    return cost;
}

function totalVacationCost() {
    let nights;
    do {
        nights = prompt("How many hotel nights?");
    } while (nights === null || nights.trim() === "" ||
             isNaN(Number(nights)) || Number(nights) < 0);

    let destination;
    do {
        destination = prompt("Enter your destination:");
    } while (destination === null || destination.trim() === "");

    let days;
    do {
        days = prompt("How many days for the rental car?");
    } while (days === null || days.trim() === "" ||
             isNaN(Number(days)) || Number(days) < 0);

    let hotel = hotelCost(Number(nights));
    let plane = planeRideCost(destination);
    let car = rentalCarCost(Number(days));

    console.log("Hotel cost: $" + hotel);
    console.log("Plane tickets cost: $" + plane);
    console.log("Rental car cost: $" + car);

    return hotel + plane + car;
}

console.log("Total vacation cost: $" + totalVacationCost());
