let shoppingList = [];
let root = document.getElementById("root");

// form
let form = document.createElement("form");

// input
let input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter an item";

let addButton = document.createElement("button");
addButton.textContent = "AddItem";
addButton.type = "submit";

form.appendChild(input);
form.appendChild(addButton);

// DOM
root.appendChild(form);

// ClearAll button
let clearButton = document.createElement("button");
clearButton.textContent = "ClearAll";
clearButton.type = "button";
root.appendChild(clearButton);

// Add an item
function addItem(event) {

    event.preventDefault();

    let item = input.value;

    if (item.trim() !== "") {

        shoppingList.push(item);

        console.log(shoppingList);

        input.value = "";
    }
}

//clear all items
function clearAll() {

    shoppingList = [];

    console.log(shoppingList);
}

form.addEventListener("submit", addItem);

clearButton.addEventListener("click", clearAll);