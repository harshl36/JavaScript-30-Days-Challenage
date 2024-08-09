// Simulated product data
const products = [
    { id: 1, name: "Smartwatch", price: 1999.99, description: "Stay connected in style", image: "watch.jfif" },
    { id: 2, name: "TWS Earbuds", price: 1449.99, description: "Immersive sound experience", image: "earbuds.jfif" },
    { id: 3, name: "Eco-friendly Water Bottle", price: 429.99, description: "Stay hydrated, save the planet", image: "bottle.jfif" },
    { id: 4, name: "Portable Charger", price: 849.99, description: "Power on the go", image: "charger.jfif" },
    { id: 4, name: "Samsung S24", price: 111849.99, description: "100x Zoom", image: "s24.jfif" },
    { id: 4, name: "Dell Lattitude 5440", price: 88849.99, description: "With Inttel i13", image: "laptop.jfif" },
];

let cart = [];

// Function to generate product listing
function generateProductListing() {
    const productListing = document.getElementById('product-listing');
    productListing.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>₹${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productListing.appendChild(productCard);
    });
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartDisplay();
    showPopupMessage(`${product.name} added to cart!`);
}

// Function to update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const totalAmount = document.getElementById('total-amount');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.name} - ₹${item.price.toFixed(2)} x ${item.quantity}</span>
            <div class="cart-item-controls">
                <button onclick="updateQuantity(${item.id}, -1)"><i class="fas fa-minus"></i></button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 1)"><i class="fas fa-plus"></i></button>
                <button onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
            </div>
        `;
        cartItems.appendChild(cartItem);

        total += item.price * item.quantity;
    });

    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    totalAmount.textContent = total.toFixed(2);
}

// Function to update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
        }
    }
}

// Function to remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    showPopupMessage("Item removed from cart!");
}

// Function to handle checkout process
function handleCheckout() {
    const cartOverlay = document.getElementById('cart-overlay');
    const checkoutForm = document.getElementById('checkout-form');

    cartOverlay.classList.remove('open');
    checkoutForm.style.display = 'block';

    document.getElementById('checkout-info').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;

        // Display confirmation
        showConfirmation(name, email, address);
    });
}

// Function to show confirmation
function showConfirmation(name, email, address) {
    const checkoutForm = document.getElementById('checkout-form');
    const confirmation = document.getElementById('confirmation');

    checkoutForm.style.display = 'none';
    confirmation.style.display = 'block';

    const orderDetails = document.getElementById('order-details');
    orderDetails.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        <h3>Order Summary:</h3>
        ${cart.map(item => `<p>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</p>`).join('')}
        <p><strong>Total:</strong> ₹${document.getElementById('total-amount').textContent}</p>
    `;

    showPopupMessage("Order placed successfully!");

    // Clear cart
    cart = [];
    updateCartDisplay();

    document.getElementById('continue-shopping').addEventListener('click', continueShopping);
}

// Function to continue shopping
function continueShopping() {
    const confirmation = document.getElementById('confirmation');
    confirmation.style.display = 'none';
}

// Function to show popup message
function showPopupMessage(message) {
    const popup = document.getElementById('popup-message');
    popup.textContent = message;
    popup.style.display = 'block';

    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}

// Function to toggle cart visibility
function toggleCart() {
    const cartOverlay = document.getElementById('cart-overlay');
    cartOverlay.classList.toggle('open');
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const themeIcon = document.querySelector('#theme-toggle i');
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Initialize the page
generateProductListing();

// Add event listeners
document.getElementById('cart-icon').addEventListener('click', toggleCart);
document.getElementById('close-cart').addEventListener('click', toggleCart);
document.getElementById('checkout-btn').addEventListener('click', handleCheckout);
document.getElementById('theme-toggle').addEventListener('click', toggleDarkMode);

// Add some vanilla JavaScript effects
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Smooth scroll to top when clicking on the header
document.querySelector('header h1').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});