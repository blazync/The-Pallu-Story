// Example code in EJS to load cart items from backend if local storage is empty
document.addEventListener('DOMContentLoaded', function() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (cartItems.length === 0) {
        $.ajax({
            url: '/fetchcartitems', // Replace with your backend endpoint
            type: 'GET',
            success: function(response) {
                cartItems = response.cartItems; // Adjust based on your backend response
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                updateCartTotal(); // Update cart total in UI
            },
            error: function(error) {
                console.error('Failed to fetch cart items from backend.', error);
            }
        });
    } else {
        updateCartTotal(); // Update cart total in UI based on existing local storage
    }
});


// Handle Add to Cart Functinality

function handleAddToCart({ userData, productId }) {
     var userData = userData || {};
    if (userData && userData.isLoggedIn) {
        // User is logged in, proceed to add to cart
            addToCart();
       } else {
            // User is not logged in, redirect to login page
                toastr.error('Please login to continue with cart.');
                setTimeout(function() {
            window.location.href = '/my-account'; // Replace with your login page URL
        }, 2000); 
             }
    }
function addToCart() {
    const button = $('#button-cart');
    const productId = button.data('id');
    const quantity = $('#input-quantity').val();

    function updateLocalStorage(cartItems) {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        document.addEventListener('DOMContentLoaded',  updateCartTotal());
    }

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const existingCartItemIndex = cartItems.findIndex(item => item.productId === productId);

    if (existingCartItemIndex !== -1) {
        cartItems[existingCartItemIndex].quantity += parseInt(quantity);
    } else {
        cartItems.push({ productId: productId, quantity: parseInt(quantity) });
    }

    updateLocalStorage(cartItems);

    $.ajax({
        url: '/addtocart',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            productId: productId,
            quantity: quantity
        }),
        beforeSend: function () {
            button.button('loading');
        },
        success: function (response) {
            button.button('reset');
            toastr.success('Product added to cart successfully!');
            // Optionally, update the cart UI here
        },
        error: function (error) {
            button.button('reset');
            toastr.error('Failed to add product to cart.');
        }
    });
}


 // Handle Add to Cart Functinality

//  Manage Cart Total items
function updateCartTotal() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    let totalPrice = cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0); // Assuming each item in cartItems has a 'price' property

    let cartTotalElement = document.getElementById('cart-total');
    if (!cartTotalElement) {
        return;
    }

    // Update the visible quantity part
    cartTotalElement.innerText = totalQuantity;

    // Optionally, update the hidden span (if needed)
    let hiddenSpan = cartTotalElement.querySelector('.hidden');
    if (hiddenSpan) {
        hiddenSpan.textContent = ` item(s) - $${totalPrice.toFixed(2)}`;
    }
}



