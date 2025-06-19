// Image Slider
document.addEventListener('DOMContentLoaded', function() {
    const sliderImages = document.querySelectorAll('.slider img');
    let currentImage = 0;
    
    function changeImage() {
        sliderImages[currentImage].classList.remove('active');
        currentImage = (currentImage + 1) % sliderImages.length;
        sliderImages[currentImage].classList.add('active');
    }
    
    // Change image every 5 seconds
    setInterval(changeImage, 5000);
    
    // Load products dynamically
    loadProducts();
});

// Product Data - You'll update this when adding new products
function loadProducts() {
    const productsContainer = document.querySelector('.products');
    
    // Sample products - replace with your actual products
    const products = [
        {
            name: "Classic Maroon Striped Suit",
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
    ];
    
    // Generate product cards
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
