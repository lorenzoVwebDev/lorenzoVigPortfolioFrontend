function Cart(localStorageCartKey, localStorageQuantityKey) {
  const cart = {
    cartItems: undefined,
  
    loadFromStorage() {
      this.cartItems = JSON.parse(localStorage.getItem(localStorageCartKey)) || 
    [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1, 
        deliveryOptionId: '2'
    }]},
      
    saveToStorage() {
      localStorage.setItem(localStorageCartKey, JSON.stringify(this.cartItems));
      localStorage.setItem(localStorageQuantityKey, JSON.stringify(totQuantity));
    }, 
    
    addtoCart(productId) {
      let matchingItem;
  
      let quantity;
    
      const quantitySelector = document.querySelector(
        `.js-quantity-selector-${productId}`
      );
    
      this.cartItems.forEach((product) => {
        if (product.productId == productId) {
          matchingItem = product;
        }
      })
      
      if (quantitySelector) {
        quantity = Number(quantitySelector.value);
      } else {
        quantity = 1;
      };
    
      if (matchingItem) {
        matchingItem.quantity += quantity;
      } else {
        this.cartItems.push({
          productId,
          quantity,
          deliveryOptionId: '1'
        });
      };
    
      this.updateTotalQuantity();
    
      this.saveToStorage();
    }, 
  
    removeFromCart(productId) {
      const newCart = [];
    
      this.cartItems.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
          newCart.push(cartItem)
        }
      });
    
      this.cartItems = newCart;
    
      this.updateTotalQuantity();
    
      this.saveToStorage();
    
      return cartLength
    }, 
  
    updateDeliveryOption(productId, deliveryOptionId) {
      let matchingItem;
    
      
      this.cartItems.forEach((product) => {
        if (product.productId == productId) {
          matchingItem = product;
        };
      })
    
      if (!matchingItem) {
        return;
      }
    
      matchingItem.deliveryOptionId = deliveryOptionId;
    
      this.saveToStorage();
    }, 
  
    initQuantity() { 
      let initialQuantity = 0;
      
      this.cartItems.forEach((product) => {
      
        initialQuantity += product.quantity
      
      })
      
      return initialQuantity
    }, 
    
    updateQuantity(productId, updateInput) {
      this.cartItems.forEach((product) => {
        if (product.productId === productId) {
          product.quantity = Number(updateInput.value)
        };
      })
    
      this.updateTotalQuantity(totQuantity);
    
      this.saveToStorage();
    }, 
    
    updateTotalQuantity() {
      let usedQuantity = 0;
    
      this.cartItems.forEach((product) => {
        usedQuantity += product.quantity
      })
    
      totQuantity = usedQuantity;
    }
  };
  
  return cart;
};

const cart = Cart('cart-oop', 'totQuantity-oop');

cart.loadFromStorage();

let totQuantity = JSON.parse(localStorage.getItem('totQuantity-oop')) || cart.initQuantity();

let cartLength = cart.cartItems.length;

//
//
//business cart below 
//
//

const businessCart = Cart();

businessCart.loadFromStorage();

let businessTotQuantity = JSON.parse(localStorage.getItem('totQuantity-oop-business')) || businessCart.initQuantity();

let businessCartLength = businessCart.cartItems.length;

console.log(cart);
console.log(businessCart);


/*
export function showQuantity(cartLength, totQuantity, productId) {
  document.querySelector('.return-to-home-link').innerHTML = `${cartLength} products; total quantity ${totQuantity}`;
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      document.querySelector(`.js-quantity-label-${productId}`).innerHTML = cartItem.quantity;
    }
  });
};
*/