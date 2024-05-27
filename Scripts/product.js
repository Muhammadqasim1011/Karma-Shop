const products = [];

// Generate product data
for (let i = 1; i <= 60; i++) {
  products.push({
    id: i,
    imgSrc: `./Images/image${i}.jpg`,
    title: `Product Title Goes Here ${i}`,
    newPrice: `$${(Math.random() * 100 + 50).toFixed(2)}`, // Random price between $50 and $150
    oldPrice: `$${(Math.random() * 50 + 150).toFixed(2)}`, // Random old price between $150 and $200
    description: `This is the description for product ${i}. It has amazing features and benefits.`,
    reviews: `${Math.floor(Math.random() * 500)} reviews`, // Random reviews count between 0 and 499
  });
}

// Function to shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to render featured products
function renderFeaturedProducts() {
  const productContent = document.getElementById("product-content-featured");
  const shuffledProducts = shuffleArray([...products]).slice(0, 8); // Get a shuffled array of 8 products

  shuffledProducts.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add(
      "all-grid-item",
      "product-item",
      `product-item-${product.id}`
    );

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
                    <a href="./Pages/product detail.html"><i class='bx bx-last-page view-more-btn' data-id="${product.id}"><span>View more</span></i></a>
                    </div>
            </div>
        `;

    productContent.appendChild(productItem);
  });
}

// Function to render latest products
function renderLatestProducts() {
  const productContent = document.getElementById("product-content-latest");
  const latestProducts = products.slice(-8); // Get the last 8 products

  latestProducts.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add(
      "all-grid-item",
      "product-item",
      `product-item-${product.id}`
    );

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

// Call the functions to render products on DOMContentLoaded event
document.addEventListener("DOMContentLoaded", renderFeaturedProducts);
document.addEventListener("DOMContentLoaded", renderLatestProducts);

// Function to update cart count in local storage
function updateCartCountInLocalStorage(count) {
  localStorage.setItem("cartProductCount", count);
}

// Function to retrieve cart count from local storage
function getCartCountFromLocalStorage() {
  const count = localStorage.getItem("cartProductCount");
  return count ? parseInt(count) : 0;
}

document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
  const cartProductCount = document.getElementById("cart-product-count");

  // Initialize cart count
  let totalCount = getCartCountFromLocalStorage();
  cartProductCount.textContent = totalCount;

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Update cart count
      totalCount++;
      cartProductCount.textContent = totalCount;
      updateCartCountInLocalStorage(totalCount);
    });
  });
});
