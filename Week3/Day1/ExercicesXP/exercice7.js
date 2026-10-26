
const allBooks = [
    {
        title: "فاتتني صلاة",
        author: "إسلام جمال",
        image: "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/90/995446/1.jpg?0725",
        alreadyRead: true
    },
    {
        title: "أرض زيكولا",
        author: "عمرو عبد الحميد",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtKcX37gde1k-dUrmtzgiP8EzaYIbGz7fFYq375sAKamQs21gBgTwUXK-5&s=10https://upload.wikimedia.org/wikipedia/ar/9/98/%D8%A3%D8%B1%D8%B6_%D8%B2%D9%8A%D9%83%D9%88%D9%84%D8%A7.jpg?utm_source=ar.wikipedia.org&utm_campaign=index&utm_content=original",
        alreadyRead: false
    }
];

// Retrieve the section
const section = document.querySelector(".listBooks");

// Loop through all books
for (let book of allBooks) {

    // Create a div for each book
    const div = document.createElement("div");

    // Create the book details
    const details = document.createElement("p");
    details.textContent = book.title + " written by " + book.author;

    // Create the book image
    const img = document.createElement("img");
    img.src = book.image;
    img.alt = book.title;
    img.style.width = "100px";

    // If the book has already been read, set details to red
    if (book.alreadyRead === true) {
        details.style.color = "red";
    }

    // Add the details and image to the div
    div.appendChild(details);
    div.appendChild(img);

    // Add the div to the section
    section.appendChild(div);
}
