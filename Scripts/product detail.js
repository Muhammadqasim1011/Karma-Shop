const incrementButton = document.getElementById('increment');
        const decrementButton = document.getElementById('decrement');
        const quantityInput = document.getElementById('quantity');

        incrementButton.addEventListener('click', () => {
            const currentValue = Number(quantityInput.value);
            if (currentValue < Number(quantityInput.max)) {
                quantityInput.value = currentValue + 1;
                updateButtonStates();
            }
        });

        decrementButton.addEventListener('click', () => {
            const currentValue = Number(quantityInput.value);
            if (currentValue > Number(quantityInput.min)) {
                quantityInput.value = currentValue - 1;
                updateButtonStates();
            }
        });

        // Optionally, disable buttons at min/max values
        const updateButtonStates = () => {
            decrementButton.disabled = Number(quantityInput.value) <= Number(quantityInput.min);
            incrementButton.disabled = Number(quantityInput.value) >= Number(quantityInput.max);
        };

        quantityInput.addEventListener('input', updateButtonStates);
        updateButtonStates(); // Initial check