
const planets = [
    {
        name: "Mercury",
        color: "gray",
        moons: []
    },
    {
        name: "Venus",
        color: "orange",
        moons: []
    },
    {
        name: "Earth",
        color: "blue",
        moons: ["Moon"]
    },
    {
        name: "Mars",
        color: "red",
        moons: ["Phobos", "Deimos"]
    },
    {
        name: "Jupiter",
        color: "brown",
        moons: ["Io", "Europa", "Ganymede", "Callisto"]
    },
    {
        name: "Saturn",
        color: "gold",
        moons: ["Titan", "Enceladus", "Rhea"]
    },
    {
        name: "Uranus",
        color: "lightblue",
        moons: ["Titania", "Oberon"]
    },
    {
        name: "Neptune",
        color: "purple",
        moons: ["Triton"]
    }
];

const section = document.querySelector(".listPlanets");

for (let planet of planets) {

    // Create a div for each planet
    const planetDiv = document.createElement("div");

    // Add the planet class
    planetDiv.classList.add("planet");

    // Give each planet a different background color
    planetDiv.style.backgroundColor = planet.color;

    // Display the planet's name
    planetDiv.textContent = planet.name;

    // Add the planet to the section
    section.appendChild(planetDiv);

    // Bonus: create the moons of each planet
    for (let moon of planet.moons) {

        const moonDiv = document.createElement("div");

        moonDiv.classList.add("moon");

        // Give each moon a different position
        const index = planet.moons.indexOf(moon);
        moonDiv.style.top = `${index * 40}px`;
        moonDiv.style.left = "100%";

        // Add the moon to its planet
        planetDiv.appendChild(moonDiv);
    }
}
