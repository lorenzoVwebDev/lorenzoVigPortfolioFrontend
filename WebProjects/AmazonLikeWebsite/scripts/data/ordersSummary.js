import { getProduct, products } from "./products.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { formatCurrency } from "../utils/money.js";
import { cart, addtoCart} from './cart.js'

export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
  if (order.products) {
    
    orders.unshift(order);
    saveToStorage()
  }
};

console.log(orders)

function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders))
};

export function renderOrdersPage() {
  let ordersHMTL = '';
  
  orders.forEach((order) => {
    const orderDate = dayjs(order.orderTime).format('DD/MM/YYYY')

    ordersHMTL += `
      <div class="order-container">
          
      <div class="order-header">
        <div class="order-header-left-section">
          <div class="order-date">
            <div class="order-header-label">Order Placed:</div>
            <div>${orderDate}</div>
          </div>
          <div class="order-total">
            <div class="order-header-label">Total:</div>
            <div>$${formatCurrency(order.totalCostCents)}</div>
          </div>
        </div>

        <div class="order-header-right-section">
          <div class="order-header-label">Order ID:</div>
          <div>${order.id}</div>
        </div>
      </div>

      <div class="order-details-grid">
        ${productsListHTML(order)}
        </div>
      </div>
    `
  })

  document.querySelector('.js-orders-grid').innerHTML = ordersHMTL;

  document.querySelectorAll('.js-buy-again-button').forEach((button) => {
    let autoPlaying = false;
    let timeoutId;
      
    function buyAgainButtonSwitch() {
      if (!autoPlaying) {
        timeoutId = setTimeout(() => {
          button.innerHTML = `
          <img class="buy-again-icon" src="images/icons/buy-again.png">
          <span class="buy-again-message">Buy it again</span>
          `
        }, 2000)
        autoPlaying = true;
      } else {
        clearTimeout(timeoutId)
        autoPlaying = false;
      }

    };

    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      
      addtoCart(productId)

      button.innerHTML = `
        <div class="product-added">
          <img class="cart-ico"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9kvmEvMfvy8zxnqFAqsatnNBhfgirvJSPKCrny9xQeg&s">
          <div>Product added!</div>
        </div>
      `
      buyAgainButtonSwitch()
    })
  })
};

function productsListHTML(order) {
  let productsHTML = '';

  order.products.forEach((product) => {
    const productId = product.productId;
      
    const matchingProduct = getProduct(productId);

    productsHTML += `
        <div class="product-image-container">
        <img src="${matchingProduct.image}">
      </div>

      <div class="product-details">
        <div class="product-name">
          ${matchingProduct.name}
        </div>
        <div class="product-delivery-date">
          Arriving on: <span class="delivery-date">${dayjs(product.estimatedDeliveryTime).format('D/MM/YYYY')}</span>
        </div>
        <div class="product-quantity">
          Quantity: ${product.quantity}
        </div>
        <button class="buy-again-button button-primary js-buy-again-button" data-product-id="${productId}">
          <img class="buy-again-icon" src="images/icons/buy-again.png">
          <span class="buy-again-message">Buy it again</span>
        </button>
      </div>

      <div class="product-actions">
        <a href="tracking.html?orderId=${order.id}&productId=${productId} ">
          <button class="track-package-button button-secondary">
            Track package
          </button>
        </a>
      </div>
    `
  });  

  return productsHTML;
};


