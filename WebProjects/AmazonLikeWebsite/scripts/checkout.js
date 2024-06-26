import {renderOrderSummary} from './checkout/orderSummary.js'
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from './data/products.js';
import { loadCart, loadCartFetch } from './data/cart.js';
//import '../scripts/data/cart-oop.js';
//import '../scripts/data/cart-class.js';
//import '../scripts/data/backend-practice.js';
//import '../test&exercises/tests.js';



async function loadPage() {
  try {
    await Promise.all([
      loadProductsFetch(),
    
      loadCartFetch()
    
    ])

    renderOrderSummary();
    renderPaymentSummary(); 
  } catch (error) {
    console.log(`Unexpected error. Please try again later. ${error}`)
  }

  renderOrderSummary();
  renderPaymentSummary(); 

  return 'value2'
}

loadPage();

/*
Promise.all([
  loadProductsFetch(),

  loadCartFetch()

]).then(() => {
  renderOrderSummary();
  renderPaymentSummary(); 
});
*/


/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  });

}).then((value) => {
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })
}).then(() => {
  renderOrderSummary();
  renderPaymentSummary(); 
});



loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary(); 
  })
})
*/

