import {getProduct} from "./products.js";

export let cart = JSON.parse(localStorage.getItem('cart')) || [
  {
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
    deliveryOptionId: '1'
  }, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1, 
    deliveryOptionId: '2'
  }
];

export let totQuantity = JSON.parse(localStorage.getItem('totQuantity'))

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart))
  localStorage.setItem('totQuantity', JSON.stringify(totQuantity))
};

export function getProductFromCart(productId) {
  let matchingItem; 

  cart.forEach((product) => {
    if (productId === product.productId) {
      matchingItem = product
    }
  })  

  return matchingItem;
};

export function addtoCart(productId) {
  let matchingItem;

  const quantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value)
  
  cart.forEach((product) => {
    if (product.productId===productId) {
      matchingItem = product;
    }
  })

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push(
      {
        productId: productId,
        quantity: quantity,
        deliveryOptionId: '1'
      }
    )
  }

  saveToStorage();
  updateTotalQuantity()
};


export function updateTotalQuantity() {
  let usedQuantity = 0;

  cart.forEach((product) => {
    usedQuantity += product.quantity
  })

  totQuantity = usedQuantity;

  saveToStorage();
  
  return totQuantity;
};

export function updateDeliveryOption(productId, deliveryOptionId) {
  const matchingItem = getProductFromCart(productId);

  if (!matchingItem) {
    return;
  };

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
};

export function removeFromCart(productId) {

  cart.forEach((product, index) => {
    if (productId === product.productId) {
      cart.splice(index, 1)
    }
  })
  
  saveToStorage();
};

export function updateQuantity(updateInput, productId) {

  cart.forEach((product) => {
    if (productId === product.productId) {
      product.quantity = Number(updateInput.value);
    }
  })

  updateTotalQuantity();
  
  saveToStorage();
}