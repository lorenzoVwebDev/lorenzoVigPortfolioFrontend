import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { renderPaymentSummary } from "../../scripts/checkout/paymentSummary.js";
import { loadFromStorage, cart } from "../../scripts/data/cart.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { renderCheckoutHeader } from "../../scripts/checkout/checkoutHeader.js";
import { loadProducts, loadProductsFetch } from "../../scripts/data/products.js";
/*
REMEMBER TO REMOVE COMMENTS FROM renderCheckoutHeader() in orderSummary.js
*/

describe('test suite: renderOrderSUmmary', () => {
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

  beforeAll((done) => {
    loadProductsFetch().then(() => {
      done();
    }); 
  })

  beforeEach(() => {
    spyOn(localStorage, 'setItem')
    document.querySelector('.js-test-container').innerHTML = `
    <div class="js-order-summary"></div>
    <div class="js-payment-summary"></div>
    <div class="js-checkout-header"></div>
  `;
  spyOn(localStorage, 'getItem').and.callFake(() => {
    return JSON.stringify([{
        productId: productId1,
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        productId: productId2,
        quantity: 1, 
        deliveryOptionId: '2'
      }]);
  });
  

  loadFromStorage();
  renderOrderSummary();
  renderPaymentSummary();
  });
  
  afterEach(() => {
    document.querySelector('.js-test-container').innerHTML = '';
  });
  
  it('displays the cart', () => {
    expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(2)
    expect(document.querySelector(`.js-product-quantity-${productId2}`).innerText).toContain('Quantity: 1')
    expect(document.querySelector(`.js-product-quantity-${productId1}`).innerText).toContain('Quantity: 2')
    expect(document.querySelector(`.js-product-name-${productId2}`).innerText).toContain('Intermediate Size Basketball');
    expect(document.querySelector(`.js-product-price-${productId1}`).innerText).toContain('$10.90')
  });
  /*
  it('delete button', () => {
    document.querySelector(`.js-delete-${productId1}`).click();
    expect(cart.length).toEqual(1)
    expect(cart[0].quantity).toEqual(1);
    expect(document.querySelectorAll('.cart-item-container').length).toEqual(1);
    expect(document.querySelector(`.js-cart-item-container-${productId1}`)).toEqual(null);
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual(productId2);
  });
  */
  it('delivery option test', () => {
    document.querySelector(`.js-delivery-option-${productId1}-3`).click();
    expect(document.querySelector(`.js-delivery-option-input-${productId1}-${cart[0].deliveryOptionId}`).checked).toEqual(true);
    //console.log(document.querySelector(`.js-delivery-option-input-${productId1}-${cart[0].deliveryOptionId}`).checked)
    expect(cart.length).toEqual(2);
    expect(cart[0].productId).toEqual(productId1)
    expect(cart[0].deliveryOptionId).toEqual('3')
  });

  it('check product price and delivery price', () => {
    document.querySelector(`.js-delivery-option-${productId1}-3`).click();
    expect(document.querySelector('.js-payment-summary-money-tax').innerHTML).toEqual('$14.98');
    expect(document.querySelector('.js-payment-summary-money-total').innerHTML).toEqual('63.50');
  });
});


