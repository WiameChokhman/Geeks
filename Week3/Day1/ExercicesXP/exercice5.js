
// 2 Using Javascript
/* 1. Retrieve the div and console.log it */
const container = document.getElementById("container");
console.log(container);

/* 2. Change Pete to Richard */
const lists = document.querySelectorAll(".list");
lists[0].children[1].textContent = "Richard";

/* 3. Delete the second li of the second ul */
lists[1].children[1].remove();

/* 4. Change the first li of each ul to your name */
for (let list of lists) {
    list.children[0].textContent = "Wiame";
}

// 3 Using Javascript

/* 1. Add student_list class to both ul elements */
for (let list of lists) {
    list.classList.add("student_list");
}

/* 2. Add university and attendance to the first ul */
lists[0].classList.add("university", "attendance");

// 4 Using Javascript

/* 1. Light blue background and padding for the div */
container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

/* 8. Hide the li containing Dan */
lists[1].lastElementChild.style.display = "none";

/* 9. Add a border to the li containing Richard */
lists[0].children[1].style.border = "1px solid black";

/* 10. Change the font size of the whole body */
document.body.style.fontSize = "15px";

/* Bonus: alert if the div background is light blue */
if (container.style.backgroundColor === "lightblue") {
    const firstUser = lists[0].children[0].textContent;
    const secondUser = lists[0].children[1].textContent;

    alert("Hello " + firstUser + " and " + secondUser);
}