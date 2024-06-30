
  class Cart {
    cartItems = undefined;
    #localStorageCartKey = undefined;
    #localStorageTotQuantityKey = undefined;

    constructor(localStorageCartKey, localStorageTotQuantityKey) {
      this.#localStorageCartKey = localStorageCartKey;
      this.#localStorageTotQuantityKey = localStorageTotQuantityKey;
      this.loadFromStorage();
      this.#localStorageCartKey = localStorageCartKey;
      this.localStorageTotQuantityKey = localStorageTotQuantityKey;
      this.loadFromStorage();
    }
    
    loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageCartKey)) || [
      {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1, 
        deliveryOptionId: '2'
      }]
    };
    
    saveToStorage() {
      localStorage.setItem(this.#localStorageCartKey, JSON.stringify(this.cartItems))
      localStorage.setItem(this.localStorageTotQuantityKey, JSON.stringify(totQuantity))
    };
    
    getProductFromCart(productId) {
      let matchingItem; 
    
      this.cartItems.forEach((product) => {
        if (productId === product.productId) {
          matchingItem = product
        }
      })  
    
      return matchingItem;
    };
    
    addtoCart(productId) {
      let matchingItem;
    
      const quantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value)
      
      this.cartItems.forEach((product) => {
        if (product.productId===productId) {
          matchingItem = product;
        }
      })
    
      if (matchingItem) {
        matchingItem.quantity += quantity;
      } else {
        this.cartItems.push(
          {
            productId: productId,
            quantity: quantity,
            deliveryOptionId: '1'
          }
        )
      }
    
      this.saveToStorage();
      this.updateTotalQuantity()
    };
    
    updateTotalQuantity() {
      let usedQuantity = 0;
    
      this.cartItems.forEach((product) => {
        usedQuantity += product.quantity
      })
    
      totQuantity = usedQuantity;
    
      this.saveToStorage();
      
      return totQuantity;
    }; 
    
    updateDeliveryOption(productId, deliveryOptionId) {
      const matchingItem = this.getProductFromCart(productId);
    
      if (!matchingItem) {
        return;
      };
    
      matchingItem.deliveryOptionId = deliveryOptionId;
    
      this.saveToStorage();
    }; 
    
    removeFromCart(productId) {
    
      this.cartItems.forEach((product, index) => {
        if (productId === product.productId) {
          this.cartItems.splice(index, 1)
        }
      })
      
      this.saveToStorage();
    };
    
    updateQuantity(updateInput, productId) {
    
      this.cartItems.forEach((product) => {
        if (productId === product.productId) {
          product.quantity = Number(updateInput.value);
        }
      })
    
      this.updateTotalQuantity();
      
      this.saveToStorage();
    }
};

export const cart = new Cart('cart-oop', 'totQuantity-oop');

let totQuantity = JSON.parse(localStorage.getItem(cart.localStorageTotQuantityKey));

let cartLength = cart.cartItems.length;


//
//
//business cart below 
//
//

const businessCart = new Cart('cart-oop-business', 'totQuantity-oop-business');

let totQuantityBusiness = JSON.parse(localStorage.getItem(businessCart.localStorageTotQuantityKey));

let cartBusinessLength = businessCart.cartItems.length;

console.log(cart.cartItems);

console.log(businessCart instanceof Cart)




//continue from page 304





