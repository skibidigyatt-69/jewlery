let cartCount = 0;

function addToCart(productName, price) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert(`${productName} added to cart!`);
}
