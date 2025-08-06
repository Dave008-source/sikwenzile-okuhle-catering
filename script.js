// Data for products - In a real app, this would come from a database
const products = [
    {
        id: 1,
        name: "Gourmet Sandwich Platter",
        price: "R500",
        image: "https://via.placeholder.com/300x200?text=Sandwich+Platter",
        description: "An assortment of delicious sandwiches with various fillings."
    },
    {
        id: 2,
        name: "Meat & Vegetable Skewers",
        price: "R750",
        image: "https://via.placeholder.com/300x200?text=Skewers",
        description: "Grilled chicken, beef, and a variety of fresh vegetables."
    },
    {
        id: 3,
        name: "Dessert Selection",
        price: "R400",
        image: "https://via.placeholder.com/300x200?text=Dessert+Tray",
        description: "A platter of cupcakes, brownies, and mini tarts."
    },
    {
        id: 4,
        name: "Cheese and Cracker Board",
        price: "R600",
        image: "https://via.placeholder.com/300x200?text=Cheese+Board",
        description: "A selection of fine cheeses, crackers, and fruits."
    },
];

// Data for complaints (simulated storage using localStorage)
let complaints = JSON.parse(localStorage.getItem('complaints')) || [];

// Function to toggle the mobile menu
function setupMenuToggle() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// Function to display products on the products page
function displayProducts() {
    const productContainer = document.getElementById('product-container');
    if (productContainer) {
        let productsHTML = '';
        products.forEach(product => {
            productsHTML += `
                <div class="product-item">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <span class="price">${product.price}</span>
                </div>
            `;
        });
        productContainer.innerHTML = productsHTML;
    }
}

// Function to display complaints on the contact page
function displayComplaints() {
    const complaintsContainer = document.getElementById('complaints-container');
    if (complaintsContainer) {
        let complaintsHTML = '';
        complaints.forEach(complaint => {
            complaintsHTML += `
                <div class="complaint-item">
                    <h4>From: ${complaint.name}</h4>
                    <p><strong>Email:</strong> ${complaint.email}</p>
                    <p>${complaint.message}</p>
                </div>
            `;
        });
        complaintsContainer.innerHTML = complaintsHTML;
    }
}

// Function to handle the feedback form submission
function handleFeedbackForm() {
    const form = document.getElementById('feedback-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const newComplaint = { name, email, message };
            complaints.push(newComplaint);

            // Save to localStorage
            localStorage.setItem('complaints', JSON.stringify(complaints));

            // Display the new complaint
            displayComplaints();

            // Clear the form
            form.reset();

            alert('Thank you for your feedback! It has been submitted.');
        });
    }
}

// Run functions when the page loads
document.addEventListener('DOMContentLoaded', () => {
    setupMenuToggle();
    displayProducts();
    displayComplaints();
    handleFeedbackForm();
});
