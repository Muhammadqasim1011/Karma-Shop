# Exclusive Product Deal Section with Cart Functionality

## Project Overview

This project involves creating an interactive and visually appealing exclusive product deal section with an "Add to Cart" feature. The implementation includes storing the cart data using local storage to ensure the cart count persists across browser sessions.

## Features

- **Exclusive Product Deal Section**: A dynamic section showcasing exclusive product deals with a countdown timer.
- **Add to Cart Functionality**: Users can add products to the cart, and the cart count updates in real-time.
- **Local Storage Integration**: The cart count is stored in local storage, ensuring it persists across sessions.
- **Responsive Design**: The layout is responsive and adapts to different screen sizes.

## Technologies Used

- **HTML**: For structuring the content.
- **CSS**: For styling the content and ensuring a responsive design.
- **JavaScript**: For adding interactivity, handling the cart functionality, and managing local storage.

## Project Structure

- `index.html`: The main HTML file containing the structure of the exclusive deal section.
- `styles.css`: The CSS file for styling the project.
- `scripts.js`: The JavaScript file containing the logic for the countdown timer, cart functionality, and local storage management.
- `img/`: The directory containing product images and other assets.

## Installation and Usage

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/exclusive-deal-section.git
   cd exclusive-deal-section
   ```

2. **Open `index.html`**:
   Open `index.html` in your preferred web browser to view the project.

## Implementation Details

### HTML

The `index.html` file includes the structure for the exclusive deal section with a countdown timer and a product carousel. Each product has an "Add to Cart" button.

### CSS

The `styles.css` file uses flexbox and media queries to ensure the section is responsive. It also includes styles for the countdown timer, product details, and cart functionality.

### JavaScript

The `scripts.js` file contains the following key functionalities:

- **Countdown Timer**: Displays a countdown timer for the exclusive deal.
- **Cart Functionality**: Updates the cart count in real-time when products are added.
- **Local Storage Management**: Stores the cart count in local storage to ensure persistence across sessions.

### Sample Code

```javascript
// Add to Cart Functionality
const cartCount = localStorage.getItem('cartCount') || 0;
document.getElementById('cart-count').innerText = cartCount;

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        let currentCount = parseInt(localStorage.getItem('cartCount')) || 0;
        currentCount++;
        localStorage.setItem('cartCount', currentCount);
        document.getElementById('cart-count').innerText = currentCount;
    });
});
```

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgements

Special thanks to Internncraft for the opportunity to work on this project and for their continuous support.

---

Enjoy the project! If you have any questions or feedback, feel free to reach out.