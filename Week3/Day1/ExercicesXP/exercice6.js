
/* Change the id of the div */
const navBar = document.getElementById("navBar");

navBar.setAttribute("id", "socialNetworkNavigation");

/* Create a new li element */
const newLi = document.createElement("li");

/* Create a text node */
const logoutText = document.createTextNode("Logout");

/* Append the text node to the li */
newLi.appendChild(logoutText);

/* Append the new li to the ul */
const ul = navBar.querySelector("ul");

ul.appendChild(newLi);

/* Retrieve the first and last li */
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

/* Display their text */
console.log("First link:", firstLi.textContent);
console.log("Last link:", lastLi.textContent);
