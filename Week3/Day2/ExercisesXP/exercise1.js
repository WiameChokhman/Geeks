
/* Retrieve the h1 using a DOM property */
const h1 = document.querySelector("article").firstElementChild;
console.log(h1);

/* 2. Remove the last paragraph */
const article = document.querySelector("article");
const paragraphs = article.querySelectorAll("p");

paragraphs[paragraphs.length - 1].remove();

/* 3. Change the h2 background to red when clicked */
const h2 = document.querySelector("h2");

h2.addEventListener("click", function () {
    h2.style.backgroundColor = "red";
});

/* 4. Hide the h3 when clicked */
const h3 = document.querySelector("h3");

h3.addEventListener("click", function () {
    h3.style.display = "none";
});

/* 5. Make all paragraphs bold when the button is clicked */
const button = document.getElementById("boldButton");

button.addEventListener("click", function () {
    const allParagraphs = document.querySelectorAll("article p");

    for (let paragraph of allParagraphs) {
        paragraph.style.fontWeight = "bold";
    }
});

/* 6. BONUS: Random font size between 0 and 100 pixels */
h1.addEventListener("mouseover", function () {
    const randomSize = Math.floor(Math.random() * 101);
    h1.style.fontSize = randomSize + "px";
});

/* 7. BONUS: Fade out the second paragraph on hover */
const secondParagraph = document.querySelectorAll("article p")[1];

secondParagraph.style.transition = "opacity 1s";

secondParagraph.addEventListener("mouseover", function () {
    secondParagraph.style.opacity = "0";
});

secondParagraph.addEventListener("mouseout", function () {
    secondParagraph.style.opacity = "1";
});
