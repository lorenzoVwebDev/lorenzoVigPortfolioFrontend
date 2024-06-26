import { addtoCart, cart, loadFromStorage, removeFromCart, updateDeliveryOption  } from "../../scripts/data/cart.js";
import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js"
import { renderPaymentSummary } from "../../scripts/checkout/paymentSummary.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { renderCheckoutHeader } from "../../scripts/checkout/checkoutHeader.js";


describe('test suite: addToCart', () => {
  beforeEach(()=> {
    spyOn(localStorage, 'setItem').and.callFake(() => {
      return JSON.stringify('[]');
    })
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }]);
    });
  
    loadFromStorage();
  
    //console.log(cart)
    addtoCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    addtoCart('15b6fc6f-327a-4ec4-896f-486349e85a3d');
  });

  afterEach(()=> {
    localStorage.clear;
  });

  it('add an existing product to the cart', () => {
    expect(cart.length).toEqual(2);
    expect(localStorage.setItem).toHaveBeenCalledTimes(4);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    }, {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '1'
    }]));
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
    expect(cart[0].quantity).toEqual(2);
  });

  it('adds a new product to the cart', () => {
    expect(cart.length).toEqual(2);
    expect(localStorage.setItem).toHaveBeenCalledTimes(4);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
    expect(cart[0].quantity).toEqual(2);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    }]))
    expect(localStorage.setItem).toHaveBeenCalledTimes(4)
  })
});

describe('test suite: Remove from Cart', () => {
  
  beforeEach(() => {
    spyOn(localStorage, 'setItem')
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify(
        [{
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 2,
          deliveryOptionId: '1'
        }, {
          productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
          quantity: 1, 
          deliveryOptionId: '2'
        }]
      );
    })
    loadFromStorage();
  });

  it('Remove product in the cart', () => {
    removeFromCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6'); 
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    expect(localStorage.setItem).toHaveBeenCalledWith('totalQuantity', JSON.stringify(1));
  });
  
  it('Remove product out of cart', () => {
    removeFromCart('1');
    expect(cart.length).toEqual(2)
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(2);
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    }, {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1, 
      deliveryOptionId: '2'
    }]));
    expect(localStorage.setItem).toHaveBeenCalledWith('totalQuantity', JSON.stringify(
      3
    )
    );
  })
  
})

describe('test suite: updateDeliveryOption', () => {
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
  beforeEach(() => {
    spyOn(localStorage, 'setItem');
    spyOn(localStorage, 'getItem' ).and.callFake(() => {
      return JSON.stringify(
        [{
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 2,
          deliveryOptionId: '1'
        }, {
          productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
          quantity: 1, 
          deliveryOptionId: '2'
        }]
      );
    });
    loadFromStorage();
   })

  it ('updateDelivery product in cart', () => {

    updateDeliveryOption(cart[0].productId, '2');
    expect(cart[0].deliveryOptionId).toEqual('2');
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '2'
    }, {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1, 
      deliveryOptionId: '2'
    }])); 
  });

  it ('updateDelivery product out of cart', () => {
    updateDeliveryOption('1', '2');
    expect(localStorage.setItem).toHaveBeenCalledTimes(0);
    expect(cart[0].deliveryOptionId).toEqual('1');
    expect(cart[1].deliveryOptionId).toEqual('2');
  })
})




