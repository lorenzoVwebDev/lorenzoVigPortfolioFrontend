/*
old function 
function showQuantity(cartLength, totQuantity, productId) {
  document.querySelector('.return-to-home-link').innerHTML = `${cartLength} products; total quantity ${totQuantity}`;
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      document.querySelector(`.js-quantity-label-${productId}`).innerHTML = cartItem.quantity;
    }
  });
};
*/
import { updateQuantity } from "../../scripts/data/cart.js";

export function renderCheckoutHeader(cartLength,totQuantity, productId) {
  

  const checkoutHeaderHTML = `
  <div class="checkout-header-middle-section">
  Checkout (<a class="return-to-home-link"
    href="amazon.html">${cartLength} products; total quantity ${totQuantity}</a>)
</div>

<div class="checkout-header-right-section">
  <img src="images/icons/checkout-lock-icon.png">
</div>
</div>
</div>
  `

  document.querySelector('.js-checkout-header').innerHTML = checkoutHeaderHTML;

  updateQuantity(productId);

};
