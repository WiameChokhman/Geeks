
/* 1. Retrieve the form and display it */
const form = document.querySelector("form");
console.log(form);

/* 2. Retrieve inputs by their id */
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");

console.log(fname);
console.log(lname);

/* 3. Retrieve inputs by their name attribute */
const firstNameInput = document.querySelector('input[name="firstname"]');
const lastNameInput = document.querySelector('input[name="lastname"]');

console.log(firstNameInput);
console.log(lastNameInput);

/* 4. Handle form submission */
form.addEventListener("submit", function(event) {

    // Prevent the page from reloading
    event.preventDefault();

    // Get input values
    const firstName = fname.value.trim();
    const lastName = lname.value.trim();

    // Check that inputs are not empty
    if (firstName === "" || lastName === "") {
        alert("Please fill in both fields.");
        return;
    }

    // Retrieve the ul
    const usersAnswer = document.querySelector(".usersAnswer");

    // Create li for the first name
    const firstLi = document.createElement("li");
    firstLi.textContent = firstName;

    // Create li for the last name
    const lastLi = document.createElement("li");
    lastLi.textContent = lastName;

    // Append li elements to the ul
    usersAnswer.appendChild(firstLi);
    usersAnswer.appendChild(lastLi);

    // Clear the inputs after submission
    form.reset();
});
