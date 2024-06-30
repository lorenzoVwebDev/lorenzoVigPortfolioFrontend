/*
import {cart, updateDeliveryOption, removeFromCart, updateQuantity} from "./data/cart.js";
*/

import {getProduct} from "./data/products.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import {deliveryOption, calculateDeliveryDate, getDeliveryOption} from "./data/deliveryOptions.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import { cart } from './data/cart-oop.js';
import {cart} from "./data/cart-class.js";
import "./http-exercise.js"
import "./data/products-class.js"

renderOrderSummary();
renderPaymentSummary();

function renderOrderSummary() {
  let cartSummaryHTML = '';

  cart.cartItems.forEach((product) => {

    const matchingProduct = getProduct(product.productId);

    const deliveryOptionId = product.deliveryOptionId;

    const deliveryOption = getDeliveryOption(deliveryOptionId);

    cartSummaryHTML += `
      <div class="cart-item-container js-cart-item-container js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date js-delivery-date">
          Delivery date: ${calculateDeliveryDate(deliveryOption)}
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image" src="${matchingProduct.image}">

          <div class="cart-item-details">
            <div class="product-name">
              ${matchingProduct.name}
            </div>
            <div class="product-price">
              $${(matchingProduct.priceCents)/100}
            </div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label">${product.quantity}</span>
              </span>
              <span class="update-quantity-link link-primary css-update-quantity-link js-update" data-product-id="${matchingProduct.id}">
                Update
              </span>
              <input class="quantity-input js-quantity-input-${matchingProduct.id}">
              <span class="save-quantity-link link-primary save-quantity-link js-save-link" data-product-id="${matchingProduct.id}">
                Save
              </span>
              <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            ${deliveryOptionsHTML(matchingProduct, product)}
          </div>
        </div>
      </div>
    `
  });

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;


function deliveryOptionsHTML(matchingProduct, product) {
  let html = '';

  deliveryOption.forEach((deliveryOption) => {   
    
  const priceString = deliveryOption.priceCents === 0 ? 'Free' : `$${deliveryOption.priceCents/100}`

  const isChecked = deliveryOption.id === product.deliveryOptionId;

    html += 
    `
    <div class="delivery-option js-delivery-option-${deliveryOption.id} js-delivery-option" data-product-id="${matchingProduct.id}" data-delivery-option-id="${deliveryOption.id}">
      <input type="radio" ${isChecked ? 'checked' : ''} class="delivery-option-input js-delivery-option-input" name="delivery-option-${matchingProduct.id}">
      <div>
        <div class="delivery-option-date">
          ${calculateDeliveryDate(deliveryOption)}
        </div>
        <div class="delivery-option-price">
          ${priceString} - Shipping
        </div>
        <div class="id-hided js-id-hided"></div>
      </div>
    </div>
    `

  })

  return html;
};

document.querySelectorAll('.js-delivery-option').forEach((element) => {
  element.addEventListener('click', () => {
    const { productId, deliveryOptionId } = element.dataset;
    cart.updateDeliveryOption(productId, deliveryOptionId);
    renderOrderSummary();
    renderPaymentSummary();  
  })
});

document.querySelectorAll('.js-delete-link').forEach((product) =>{
  product.addEventListener('click', () => {
    const productId = product.dataset.productId;
    cart.removeFromCart(productId);
    renderOrderSummary();
    renderPaymentSummary();
  })
});

document.querySelectorAll('.js-update').forEach((link) => {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;

    const container = document.querySelector(`.js-cart-item-container-${productId}`);

    container.classList.add('is-editing-quantity');
  })
})

document.querySelectorAll('.js-save-link').forEach((link) => {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId

    const container = document.querySelector(`.js-cart-item-container-${productId}`);

    container.classList.remove('is-editing-quantity')

    const updateInput = document.querySelector(`.js-quantity-input-${productId}`)

    cart.updateQuantity(updateInput, productId);
    renderOrderSummary();
    renderPaymentSummary();
  })
})
};




/*
 CONTINUNE FROM CHECKOUT HEADER
*/