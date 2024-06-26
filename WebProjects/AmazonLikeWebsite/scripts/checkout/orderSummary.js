import { cart, totQuantity, updateQuantity, updateDeliveryOption } from "../../scripts/data/cart.js";
// import again the showQuantity function if necessary
import { products, getProduct } from "../../scripts/data/products.js"
import { formatCurrency } from "../utils/money.js";
import { removeFromCart } from "../../scripts/data/cart.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { deliveryOption, getDeliveryOption, calculateDeliveryDate } from '../../scripts/data/deliveryoptions.js';
import {renderPaymentSummary} from './paymentSummary.js';
import {renderCheckoutHeader} from './checkoutHeader.js'
//import {renderOrdersPage} from '../../scripts/orders.js'

//let totalQuantity = JSON.parse(localStorage.getItem('totalQuantity')) || totQuantity;

//console.log(totQuantity);

export function renderOrderSummary() {
  let cartSummaryHTML = '';
    cart.forEach((cartItem) => {
      
      const productId = cartItem.productId;

      const matchingProduct = getProduct(productId)

      const deliveryOptionId = cartItem.deliveryOptionId;

      const deliveryOptions = getDeliveryOption(deliveryOptionId);
      
      const today = dayjs();
      const deliveryDate = today.add(
        deliveryOptions.deliveryDays, 
        'days'
      );
      const dateString = deliveryDate.format(
        'dddd, MMMM D'
      );
      

      calculateDeliveryDate(deliveryOptions);
      
      cartSummaryHTML += `
        <div class="cart-item-container 
        js-cart-item-container
        js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
          Delivery date: ${calculateDeliveryDate(deliveryOptions)}
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${matchingProduct.image}">

          <div class="cart-item-details">
            <div class="product-name js-product-name-${matchingProduct.id}">
              ${matchingProduct.name}
            </div>
            <div class="product-price js-product-price-${matchingProduct.id}">
            $${matchingProduct.getPrice()}
            </div>
            <div class="product-quantity js-product-quantity-${matchingProduct.id}">
              <span>
                Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
              </span>
              <span class="update-quantity-link link-primary js-update css-update-quantity-link" data-product-id="${matchingProduct.id}">
                Update
              </span>
              <input class="quantity-input js-quantity-input-${matchingProduct.id}">
              <span class="save-quantity-link link-primary save-quantity-link js-save-quantity-link" data-product-id="${matchingProduct.id}">Save</span>
              <span class="delete-quantity-link link-primary js-delete-link js-delete-${matchingProduct.id}" data-product-id="${matchingProduct.id}">
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            ${deliveryOptionsHTML(matchingProduct, cartItem)}
          </div>
        </div>
      </div> `
  });

  function deliveryOptionsHTML(matchingProduct, cartItem) {
    let html = '';

    deliveryOption.forEach((deliveryOption) => {
      
      const today = dayjs();
      const deliveryDate = today.add(
        deliveryOption.deliveryDays, 
        'days'
      );
      const dateString = deliveryDate.format(
        'dddd, MMMM D'
      );
      
      const priceString = deliveryOption.priceCents === 0 ? 'FREE-' : `$${formatCurrency(deliveryOption.priceCents)} -`;

      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

      html += `
      <div class="delivery-option js-delivery-option js-delivery-option-${matchingProduct.id}-${deliveryOption.id}" data-product-id="${matchingProduct.id}" data-delivery-option-id="${deliveryOption.id}">
        <input type="radio"
          ${isChecked ? 'checked': ''}
          class="delivery-option-input js-delivery-option-input-${matchingProduct.id}-${deliveryOption.id}"
          name="delivery-option-${matchingProduct.id}">
        <div>
          <div class="delivery-option-date">
            ${calculateDeliveryDate(deliveryOption)}
          </div>
          <div class="delivery-option-price">
            ${priceString} - Shipping
          </div>
          <div class="id-hided js-id-hided">${matchingProduct.id}</div>
        </div>
      </div>
      `
    })

    return html;
  };

  document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

  renderCheckoutHeader(cart.length, totQuantity);

  document.querySelectorAll('.js-delete-link').forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId
      
      removeFromCart(productId);

      updateQuantity(productId);

      renderCheckoutHeader(cart.length, totQuantity);

      renderOrderSummary();
      
      renderPaymentSummary();
    })
  })

  document.querySelectorAll('.js-update').forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId

      const container = document.querySelector(`.js-cart-item-container-${productId}`)

      container.classList.add('is-editing-quantity')

      console.log(productId)
    })
  })

  document.querySelectorAll('.js-save-quantity-link').forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId

      const container = document.querySelector(`.js-cart-item-container-${productId}`)

      container.classList.remove('is-editing-quantity')

      const updateInput = document.querySelector(`.js-quantity-input-${productId}`)
      
      updateQuantity(productId, updateInput)

      renderOrderSummary();

      renderPaymentSummary();

      renderCheckoutHeader(cart.length, totQuantity, productId);
      })
  })

  document.querySelectorAll('.js-delivery-option').forEach((element) => {
    element.addEventListener('click', () => {
      const { productId, deliveryOptionId } = element.dataset;
      updateDeliveryOption(productId, deliveryOptionId);
      renderOrderSummary();
      renderPaymentSummary();
      console.log(cart)
    })
  })
};

