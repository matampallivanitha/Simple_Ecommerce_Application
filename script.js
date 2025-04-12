document.addEventListener('DOMContentLoaded', function () {
  let cart = [];
  let selectedCategory = 'All';
  let allProducts = [];

  function addToCart(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;
  
    const existingProduct = cart.find(item => item.name === product.name);
  
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    alert(product.name + " added to cart!");
    displayCart();
  }      

  function buyNow(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (product) {
      alert("You bought " + product.name + " for Rs." + product.price);
    }
  }

  function displayCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
  
    cartItems.innerHTML = "";
  
    let total = 0;
  
    cart.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${item.name} - Rs.${parseInt(item.price)} x ${item.quantity}
        <button class="remove-btn" onclick="removeFromCart('${item.name}')">Remove</button>
      `;
      cartItems.appendChild(li);
      total += parseInt(item.price) * item.quantity;
    });
  
    cartTotal.textContent = `Total: Rs.${total.toLocaleString('en-IN')}`;
  }    

  function removeFromCart(productName) {
    const index = cart.findIndex(item => item.name === productName);
  
    if (index !== -1) {
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      } else {
        cart.splice(index, 1);
      }
    }
  
    displayCart();
  }     

  function sanitizeImagePath(imagePath) {
    return imagePath.replace(/^\/?images\//, '');
  }

  function renderProducts(products) {
    const list = document.getElementById("product-list");
    if (!list) {
      console.error("Product list container not found.");
      return;
    }
    list.innerHTML = "";
  
    if (products.length === 0) {
      list.innerHTML = "<p>No products found.</p>";
      return;
    }
  
    products.forEach(product => {
      const div = document.createElement("div");
      div.className = "product";
      div.setAttribute("data-name", product.name.toLowerCase());
      div.setAttribute("data-category", product.category.toLowerCase());
  
      const cleanImage = sanitizeImagePath(product.image);
      const imagePath = `/images/${cleanImage}`;
  
      div.innerHTML = `
      <div class="image-box">
        <img src="${imagePath}" alt="${product.name}"
        onerror="this.onerror=null; this.src='/images/default.webp';" />
      </div>
      <h3>${product.name}</h3>
      <p>Price: Rs.${parseInt(product.price)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
      <button class="buy-button" onclick="buyNow(${product.id})">Buy Now</button>
      `;
  
      list.appendChild(div);
    });
  }  

  function hideCart() {
    const cartBox = document.getElementById("cart-box");
    if (cartBox) {
      cartBox.style.display = "none";
    }
  }
  
  function showCart() {
    const cartBox = document.getElementById("cart-box");
    if (cartBox) {
      cartBox.style.display = "block";
    }
  }
  
  function toggleCart() {
    const cartBox = document.getElementById("cart-box");
    if (cartBox) {
      cartBox.style.display = cartBox.style.display === "block" ? "none" : "block";
    }
  }  

  function searchProducts() {
    hideCart(); // 🔥 Hide cart on search
    applyFilters();
  }

  function filterByCategory(category) {
    selectedCategory = category;
    document.getElementById("searchBox").value = ""; // 🔥 Clear search
    hideCart(); // 🔥 Hide cart on filter
    applyFilters();
  }

  function applyFilters() {
    const search = document.getElementById("searchBox").value.toLowerCase().trim();
  
    const filtered = allProducts.filter(product => {
      const name = product.name.toLowerCase();
      const category = product.category.toLowerCase();
  
      const matchesSearch = name.includes(search) || category.includes(search);
      const categoryFilter = selectedCategory === 'All' || category === selectedCategory.toLowerCase();
  
      return matchesSearch && categoryFilter;
    });
  
    renderProducts(filtered);
  }  

  fetch('http://localhost:8080/products')
    .then(res => res.json())
    .then(data => {
      allProducts = data;
      renderProducts(allProducts);
    })
    .catch(err => {
      console.error('Error fetching products:', err);
    });

  // Expose for global use
  window.addToCart = addToCart;
  window.buyNow = buyNow;
  window.searchProducts = searchProducts;
  window.filterByCategory = filterByCategory;
  window.toggleCart = toggleCart;
  window.removeFromCart = removeFromCart;
  window.hideCart = hideCart;
  window.showCart = showCart;

  // ✅ HIDE the cart when the page first loads
  hideCart();

});
