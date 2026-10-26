
let allBoldItems;

function getBoldItems() {
    allBoldItems = document.querySelectorAll("p strong");
}

function highlight() {
    for (let item of allBoldItems) {
        item.style.color = "blue";
    }
}

function returnItemsToDefault() {
    for (let item of allBoldItems) {
        item.style.color = "black";
    }
}

// Récupérer tous les éléments en gras
getBoldItems();

// Récupérer le paragraphe
let paragraph = document.querySelector("p");

// Quand la souris entre dans le paragraphe
paragraph.addEventListener("mouseover", highlight);

// Quand la souris quitte le paragraphe
paragraph.addEventListener("mouseout", returnItemsToDefault);
