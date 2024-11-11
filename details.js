// Fetch and display the selected product details
document.addEventListener("DOMContentLoaded", () => {
    const productId = localStorage.getItem('selectedProductId');

    if (productId) {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(response => response.json())
            .then(product => {
                displayProductDetails(product);
            });
    }
});

// Function to display the product details on the page
function displayProductDetails(product) {
    const container = document.getElementById('productDetailsContainer');
    container.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <p>Category: ${product.category}</p>
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
}
