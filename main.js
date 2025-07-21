  // Mobile Menu Toggle
        document.getElementById('menuToggle').addEventListener('click', function() {
            document.getElementById('mainNav').classList.toggle('active');
        });

        // Slider Functionality
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        
        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        }
        
        function nextSlide() {
            showSlide(currentSlide + 1);
        }
        
        // Auto slide every 3 seconds
        setInterval(nextSlide, 3000);
        
        // Product Data
        const products = [
            {
                id: 1,
                title: "Hot mens sale track suit trouser t shirt",
                description: "very comfortable and high quality track suit in best price .",
                price: 1300,
                image: "./images/hot-mens-sale-tracksuit1.jpeg"
            },
            {
                id: 2,
                title: "Smart Watch Pro",
                description: "Fitness tracker with heart rate monitor, GPS and waterproof design.",
                price: 129.99,
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                id: 3,
                title: "Organic Cotton T-Shirt",
                description: "Comfortable and eco-friendly t-shirt available in multiple colors.",
                price: 24.99,
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                id: 4,
                title: "Stainless Steel Water Bottle",
                description: "Keep your drinks hot or cold for hours with this durable bottle.",
                price: 19.99,
                image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                id: 5,
                title: "Wireless Charging Pad",
                description: "Fast charging pad compatible with all Qi-enabled devices.",
                price: 29.99,
                image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                id: 6,
                title: "Leather Wallet",
                description: "Slim and stylish genuine leather wallet with multiple card slots.",
                price: 34.99,
                image: "https://images.unsplash.com/photo-1591561954555-607968c989ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                id: 7,
                title: "Ceramic Coffee Mug",
                description: "Beautiful handmade ceramic mug with comfortable grip.",
                price: 14.99,
                image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                id: 8,
                title: "Yoga Mat",
                description: "Non-slip, eco-friendly yoga mat with carrying strap.",
                price: 39.99,
                image: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
        ];

        // Function to create product card
        function createProductCard(product) {
            return `
                <div class="product-card" onclick="redirectToWhatsApp(${product.id})">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="product-details">
                        <h3 class="product-title">${product.title}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">
                            <span class="price">Rs${product.price.toFixed(2)}</span>
                            <button class="add-to-cart">Shop Know</button>
                        </div>
                    </div>
                </div>
            `;
        }

        // Function to redirect to WhatsApp with product info
        function redirectToWhatsApp(productId) {
            const product = products.find(p => p.id === productId);
            const message = `I'm interested in this product: ${product.title} ($${product.price}). Can you tell me more about it?`;
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/03466531318?text=${encodedMessage}`, '_blank');
            // Replace 1234567890 with your actual WhatsApp number
        }

        // Display featured products (first 4)
        const featuredProductsContainer = document.getElementById('featuredProducts');
        products.slice(0, 4).forEach(product => {
            featuredProductsContainer.innerHTML += createProductCard(product);
        });

        // Display new arrivals (last 4)
        const newArrivalsContainer = document.getElementById('newArrivals');
        products.slice(4, 8).forEach(product => {
            newArrivalsContainer.innerHTML += createProductCard(product);
        });