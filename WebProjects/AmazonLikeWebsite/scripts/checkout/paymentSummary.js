import {cart, totQuantity} from '../../scripts/data/cart.js'
import {getProduct} from '../../scripts/data/products.js'
import {getDeliveryOption} from '../../scripts/data/deliveryoptions.js';
import {formatCurrency} from '../utils/money.js'
import {addOrder} from '../data/ordersSummary.js'

export function renderPaymentSummary() {
  let productPriceCents = 0;
  let shippingPriceCents = 0;

  cart.forEach((cartItem) => {
      const product = getProduct(cartItem.productId);
      productPriceCents += (product.priceCents * cartItem.quantity);

      const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
      shippingPriceCents += deliveryOption.priceCents;
    });

    const totalBeforetaxCents = productPriceCents + shippingPriceCents;
    const taxCents = totalBeforetaxCents * 0.1;
    const totalCents = totalBeforetaxCents + taxCents;

    const paymentSummaryHTML = `
      <div class="payment-summary-title">
        Order Summary
      </div>

      <div class="payment-summary-row">
        <div class="js-ordersummary-total-items">Items (${totQuantity}):</div>
        <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
      </div>

      <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money js-payment-summary-money-tax">$${formatCurrency(shippingPriceCents)}</div>
      </div>

      <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">
          $${formatCurrency(totalBeforetaxCents)}
        </div>
      </div>

      <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">$${formatCurrency(totalBeforetaxCents)}</div>
      </div>

      <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money  js-payment-summary-money-total">${formatCurrency(totalCents)}</div>
      </div>

      <button class="place-order-button button-primary js-place-order">
        Place your order
      </button>
      <div>
    `

    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;

    document.querySelector('.js-place-order').addEventListener('click', async () => {
      try {
        const response = await fetch('https://supersimplebackend.dev/orders', {
          method: 'POST',
          headers:{
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({
            cart: cart
          })
        })
  
        const order = await response.json();

        console.log(order)
        
        addOrder(order);
      } catch (error) {
        console.log('Unexpected error. Try again later.')
      }

      //window.location.href = 'orders.html'
    })
};