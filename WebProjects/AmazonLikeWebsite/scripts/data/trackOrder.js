import {getProduct, loadProductsFetch, products} from './products.js';
import {orders} from './ordersSummary.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {formatCurrency} from '../utils/money.js';

export function loadPage() {
  document.addEventListener('DOMContentLoaded', async () => {
    let orderId;

    let productId;
  
    let matchingOrderProduct;

    await loadProductsFetch()

    const url = new URL(window.location.href)

    orderId = url.searchParams.get('orderId');
    productId = url.searchParams.get('productId');

    const matchingProduct = getProduct(productId); 

    matchingOrderProduct = getOrder(orders);

    console.log(orders)
    const trackingHTML = `
        <a class="back-to-orders-link link-primary" href="orders.html">
        View all orders
      </a>

      <div class="delivery-date">
        Arriving on ${dayjs(matchingOrderProduct.estimatedDeliveryTime).format('dddd, MMMM D ')}
      </div>

      <div class="product-info">
        ${matchingProduct.name}
      </div>

      <div class="product-info">
        Quantity: ${matchingOrderProduct.quantity}
      </div>

      <img class="product-image" src="${matchingProduct.image}">

      <div class="progress-labels-container">
        <div class="progress-label ${Number(getDeliveryTracking())<=49 ? 'current-status' : '' }">
          Preparing
        </div>
        <div class="progress-label ${Number(getDeliveryTracking())>=49 && Number(getDeliveryTracking()) <= 99 ? 'current-status' : '' }">
          Shipped
        </div>
        <div class="progress-label ${Number(getDeliveryTracking())>= 100 ? 'current-status' : '' }">
          Delivered
        </div>
      </div>

      <div class="progress-bar-container">
        <div class="progress-bar" style="width: ${getDeliveryTracking()}%;"></div>
      </div>
    `
    document.querySelector('.js-order-tracking').innerHTML = trackingHTML;

    function getOrder(orders) {
      let matchingOrder;
  
      orders.forEach(order => {
        if (order.id === orderId) {
          matchingOrder = order;
        };
      })
      
      matchingOrder.products.forEach(product => {
  
        if (product.productId === productId) {
          matchingOrderProduct = product;
        }
      });
  
      return matchingOrderProduct;
    };

    function getDeliveryTracking() {
      let matchingOrder;
  
      orders.forEach(order => {
        if (order.id === orderId) {
          matchingOrder = order;
        };
      })

      const orderTime = dayjs(matchingOrder.orderTime);
      const currentTime = dayjs();
      const deliveryTime = dayjs(matchingOrderProduct.estimatedDeliveryTime
      );
      const orderTrackingPercentage = ((currentTime - orderTime)/(deliveryTime-orderTime))*100;

      return (Math.round(orderTrackingPercentage)).toFixed(0)
    };
  });
};






