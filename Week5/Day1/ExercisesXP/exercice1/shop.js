
// shop.js

// Import products from products.js
const products = require('./products');

// Function to search for a product by name
function searchProduct(productName) {
    const product = products.find(
        p => p.name.toLowerCase() === productName.toLowerCase()
    );

    if (product) {
        console.log("Product found:");
        console.log("Name:", product.name);
        console.log("Price:", product.price, "DH");
        console.log("Category:", product.category);
    } else {
        console.log("Product not found!");
    }

    console.log("--------------------");
}

// Test the function with different product names
searchProduct("Laptop");
searchProduct("Smartphone");
searchProduct("Headphones");
searchProduct("Tablet");
