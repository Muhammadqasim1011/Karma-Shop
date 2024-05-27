document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedProduct();
});

function renderFeaturedProduct() {
    const productContent = document.getElementById('product-content-featured');
    const randomProduct = products[Math.floor(Math.random() * products.length)]; // Get a random product

    document.getElementById('product-img').src = randomProduct.imgSrc;
    document.getElementById('product-title').textContent = randomProduct.title;
    document.getElementById('product-price').textContent = randomProduct.newPrice;
    document.getElementById('product-category').textContent = randomProduct.category || 'General';
    document.getElementById('product-availability').textContent = 'In Stock'; // Assuming all products are in stock
    document.getElementById('product-description').textContent = randomProduct.description;

    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const quantityInput = document.getElementById('quantity');

    incrementButton.addEventListener('click', () => {
        const currentValue = Number(quantityInput.value);
        if (currentValue < Number(quantityInput.max)) {
            quantityInput.value = currentValue + 1;
        }
    });

    decrementButton.addEventListener('click', () => {
        const currentValue = Number(quantityInput.value);
        if (currentValue > Number(quantityInput.min)) {
            quantityInput.value = currentValue - 1;
        }
    });
}
