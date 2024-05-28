document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedProduct();

    document.getElementById('show-next-product').addEventListener('click', () => {
        renderFeaturedProduct();
    });
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

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.about-nav-item');
    const contentItems = document.querySelectorAll('.about-product-item');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));

            // Add active class to the clicked nav item
            item.classList.add('active');

            // Hide all content items
            contentItems.forEach(content => content.classList.remove('show'));

            // Show the corresponding content item
            const contentId = `${item.id}-content`;
            const contentElement = document.getElementById(contentId);

            if (contentElement) {
                contentElement.classList.add('show');
            }
        });
    });
});
