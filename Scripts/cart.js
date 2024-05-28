document.addEventListener('DOMContentLoaded', function() {
    const cartBody = document.getElementById('cart-body');
    const subtotalElement = document.getElementById('subtotal');

    function renderCartItems() {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartBody.innerHTML = '';

        let subtotal = 0;

        cartItems.forEach(item => {
            const itemTotal = (item.newPrice * item.quantity).toFixed(2);
            subtotal += parseFloat(itemTotal);

            const row = document.createElement('tr');
            row.classList.add('cart-item');
            row.setAttribute('data-id', item.id);

            row.innerHTML = `
                <td><img src="${item.imgSrc}" alt="${item.title}"></td>
                <td><p>${item.title}</p></td>
                <td><p><strong>$<span>${item.newPrice}</span></strong></p></td>
                <td><input type="number" class="cart-quantity" min="1" max="100" value="${item.quantity}" data-price="${item.newPrice}"></td>
                <td><p><strong>$<span class="total-price">${itemTotal}</span></strong></p></td>
            `;

            cartBody.appendChild(row);

            row.querySelector('.cart-quantity').addEventListener('input', function() {
                const quantity = parseInt(this.value);
                const price = parseFloat(this.dataset.price);
                const totalPriceElement = row.querySelector('.total-price');

                const newTotal = (quantity * price).toFixed(2);
                totalPriceElement.textContent = newTotal;

                item.quantity = quantity;
                localStorage.setItem('cartItems', JSON.stringify(cartItems));

                updateSubtotal();
            });
        });

        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    }

    function updateSubtotal() {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        let subtotal = 0;

        cartItems.forEach(item => {
            subtotal += item.newPrice * item.quantity;
        });

        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    }

    renderCartItems();
});
