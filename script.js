document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.addEventListener('click', function() {
            const alreadyExpanded = document.querySelector('.product.expanded');
            if (alreadyExpanded && alreadyExpanded !== this) {
                alreadyExpanded.classList.remove('expanded');

                const selects = alreadyExpanded.querySelectorAll('select.dynamic-option');
                selects.forEach(select => select.remove());
            }
            if (!this.classList.contains('expanded')) {
                this.classList.add('expanded');
                const sizeSelect = document.createElement('select');
                sizeSelect.classList.add('dynamic-option');
                sizeSelect.innerHTML = `
                    <option value="">Select Size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                `;
                this.appendChild(sizeSelect);
                const colorSelect = document.createElement('select');
                colorSelect.classList.add('dynamic-option');
                colorSelect.innerHTML = `
                    <option value="">Select Color</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                `;
                this.appendChild(colorSelect);
            }
        });
    });
});
