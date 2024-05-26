document.addEventListener('DOMContentLoaded', function() {
    const categories = document.querySelectorAll('.has-dropdown-cat');

    categories.forEach(category => {
        category.addEventListener('click', function() {
            this.classList.toggle('open');
        });
    });
});


const products = [];

for (let i = 1; i <= 60; i++) {
    products.push({
        id: i,
        imgSrc: `../Images/image${i}.jpg`,
        title: `Product Title Goes Here ${i}`,
        newPrice: `$${(Math.random() * 100 + 50).toFixed(2)}`,
        oldPrice: `$${(Math.random() * 50 + 150).toFixed(2)}`,
        description: `This is the description for product ${i}. It has amazing features and benefits.`,
        reviews: `${Math.floor(Math.random() * 500)} reviews`
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to render featured products
function renderFeaturedProducts() {
    const productContent = document.getElementById('product-content-featured');
    const shuffledProducts = shuffleArray([...products]).slice(0, 12); // Get a shuffled array of 8 products

    shuffledProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('all-grid-item', 'product-item', `product-item-${product.id}`);

        productItem.innerHTML = `
            <img class="product-img" src="${product.imgSrc}" alt="Product-Image">
            <div class="product-content">
                <h2 class="title">${product.title}</h2>
                <div class="price">
                    <p class="new-price">${product.newPrice}</p>
                    <p class="old-price">${product.oldPrice}</p>
                </div>
                <div class="product-icon">
                    <i class='bx bx-cart-alt add-to-cart-btn'><span>Add to Cart</span></i>
                    <i class='bx bxs-heart'><span>Wishlist</span></i>
                    <i class='bx bx-git-compare'><span>Compare</span></i>
                    <i class='bx bx-last-page'><span>View more</span></i>
                </div>
            </div>
        `;

        productContent.appendChild(productItem);
    });
}

document.addEventListener('DOMContentLoaded', renderFeaturedProducts);