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
        imgSrc: `../Images/image${i}.jpg`, // Corrected image path
        title: `Product Title Goes Here ${i}`,
        newPrice: (Math.random() * 100 + 50).toFixed(2),
        oldPrice: (Math.random() * 50 + 150).toFixed(2),
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

let currentPage = 0;

function getFilteredProducts() {
    const priceFilter = document.querySelector('input[name="color"]:checked');
    let filteredProducts = [...products];

    if (priceFilter) {
        const priceRange = priceFilter.id;

        switch (priceRange) {
            case 'black':
                filteredProducts = filteredProducts.filter(product => parseFloat(product.newPrice) < 100);
                break;
            case 'balckleather':
                filteredProducts = filteredProducts.filter(product => parseFloat(product.newPrice) >= 100 && parseFloat(product.newPrice) <= 200);
                break;
            case 'blackred':
                filteredProducts = filteredProducts.filter(product => parseFloat(product.newPrice) > 200 && parseFloat(product.newPrice) <= 400);
                break;
            case 'gold':
                filteredProducts = filteredProducts.filter(product => parseFloat(product.newPrice) > 400 && parseFloat(product.newPrice) <= 499);
                break;
            case 'spacegrey':
                filteredProducts = filteredProducts.filter(product => parseFloat(product.newPrice) > 499);
                break;
            default:
                break;
        }
    }

    return filteredProducts;
}

function renderFeaturedProducts() {
    const productContent = document.getElementById('product-content-featured');
    productContent.innerHTML = '';

    const sortingOrder = document.getElementById('sorting-order').value;
    const showItemCount = parseInt(document.getElementById('show-item').value, 10);

    let filteredProducts = getFilteredProducts();

    if (sortingOrder === 'Random') {
        filteredProducts = shuffleArray(filteredProducts);
    } else if (sortingOrder === 'Reverse') {
        filteredProducts.reverse();
    }

    const start = currentPage * showItemCount;
    const end = start + showItemCount;
    const paginatedProducts = filteredProducts.slice(start, end);

    paginatedProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('all-grid-item', 'product-item', `product-item-${product.id}`);
        productItem.setAttribute('data-id', product.id);

        productItem.innerHTML = `
            <img class="product-img" src="${product.imgSrc}" alt="Product-Image" data-id="${product.id}">
            <div class="product-content">
                <h2 class="title">${product.title}</h2>
                <div class="price">
                    <p class="new-price">$${product.newPrice}</p>
                    <p class="old-price">$${product.oldPrice}</p>
                </div>
                <div class="product-icon">
                    <i class='bx bx-cart-alt add-to-cart-btn'><span>Add to Cart</span></i>
                    <i class='bx bxs-heart'><span>Wishlist</span></i>
                    <i class='bx bx-git-compare'><span>Compare</span></i>
                    <a href="./product detail.html"><i class='bx bx-last-page view-more-btn' data-id="${product.id}"><span>View more</span></i></a>
                </div>
            </div>
        `;

        productContent.appendChild(productItem);
    });

    document.querySelectorAll('.product-img, .view-more-btn').forEach(element => {
        element.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            window.location.href = `product detail.html`; // Keep the file name as "product detail.html"
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedProducts();

    document.getElementById('sorting-order').addEventListener('change', () => {
        currentPage = 0;
        renderFeaturedProducts();
    });

    document.getElementById('show-item').addEventListener('change', () => {
        currentPage = 0;
        renderFeaturedProducts();
    });

    document.querySelectorAll('.bx-left-arrow-alt').forEach(arrow => {
        arrow.addEventListener('click', () => {
            if (currentPage > 0) {
                currentPage--;
                renderFeaturedProducts();
            }
        });
    });

    document.querySelectorAll('.bx-right-arrow-alt').forEach(arrow => {
        arrow.addEventListener('click', () => {
            if ((currentPage + 1) * parseInt(document.getElementById('show-item').value, 10) < getFilteredProducts().length) {
                currentPage++;
                renderFeaturedProducts();
            }
        });
    });

    document.querySelectorAll('input[name="color"]').forEach(radio => {
        radio.addEventListener('change', () => {
            currentPage = 0;
            renderFeaturedProducts();
        });
    });
});

// Function to update cart count in local storage
function updateCartCountInLocalStorage(count) {
    localStorage.setItem('cartProductCount', count);
}

// Function to retrieve cart count from local storage
function getCartCountFromLocalStorage() {
    const count = localStorage.getItem('cartProductCount');
    return count ? parseInt(count) : 0;
}

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartProductCount = document.getElementById('cart-product-count');

    // Initialize cart count
    let totalCount = getCartCountFromLocalStorage();
    cartProductCount.textContent = totalCount;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update cart count
            totalCount++;
            cartProductCount.textContent = totalCount;
            updateCartCountInLocalStorage(totalCount);
        });
    });
});
