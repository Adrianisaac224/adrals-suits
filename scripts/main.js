// Shared functions
function loadNavigation() {
    // Highlight current page in navigation
    const currentPage = location.pathname.split('/').pop().replace('.html', '');
    if (currentPage) {
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            if (link.getAttribute('href').includes(currentPage)) {
                link.classList.add('active');
            }
        });
    }
}

// Image Slider for Homepage
function initSlider() {
    const slider = document.querySelector('.fullscreen-slider');
    if (!slider) return;
    
    const images = slider.querySelectorAll('img');
    let currentImage = 0;
    
    function changeImage() {
        images[currentImage].classList.remove('active');
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].classList.add('active');
    }
    
    // Start with first image
    images[currentImage].classList.add('active');
    
    // Change image every 5 seconds
    setInterval(changeImage, 5000);
}

// Load Products for Collection Page
function loadProducts() {
    const productsContainer = document.querySelector('.products-grid');
    if (!productsContainer) return;
    
    const products = [
        {
            name: "Classic Navy Suit",
            description: "Premium wool blend with perfect tailoring",
            image: "images/suit1.jpg"
        },
        {
            name: "Charcoal Gray Suit",
            description: "Modern fit with slim-cut design",
            image: "images/suit2.jpg"
        },
        {
            name: "Black Tuxedo",
            description: "Formal wear for special occasions",
            image: "images/suit3.jpg"
        },
        {
            name: "Brown Striped",
            description: "Formal wear for special occasions",
            image: "images/suit4.jpg"
        },
        {
            name: "Checked Tuxedo",
            description: "Office wear for official days",
            image: "images/suit20.jpg"
        },
        {
            name: "Gray Tuxedo",
            description: "Formal wear for special occasions",
            image: "images/suit24.jpg"
        }
        // Add more products as needed
    ];
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadNavigation();
    initSlider();
    loadProducts();
});
