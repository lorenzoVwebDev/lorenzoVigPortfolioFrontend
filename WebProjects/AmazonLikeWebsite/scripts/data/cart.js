export let cart;

loadFromStorage();

export function loadCart(fun) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    console.log(xhr.response)
    fun();
  });
  
  xhr.open('GET', 'https://supersimplebackend.dev/cart');
  xhr.send(); 
}

export async function loadCartFetch() {
  const response = await fetch('https://supersimplebackend.dev/cart');
  const text = await response.text()

  console.log(text);

  return text;
};

loadCartFetch()

export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart')) || 
[{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
    deliveryOptionId: '1'
  }, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1, 
    deliveryOptionId: '2'
  }];
} 

export let cartLength = cart.length
export let totQuantity =  JSON.parse(localStorage.getItem('totalQuantity')) || initQuantity();

function initQuantity() { 
let initialQuantity = 0;

cart.forEach((product) => {

  initialQuantity += product.quantity

})

return initialQuantity
};


export function updateQuantity(productId, updateInput) {
  cart.forEach((product) => {
    if (product.productId === productId) {
      product.quantity = Number(updateInput.value)
    };
  })

  updateTotalQuantity(totQuantity);

  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('totalQuantity', JSON.stringify(totQuantity));
}

export function addtoCart(productId) {
  let matchingItem;

  const quantitySelector = document.querySelector(
    `.js-quantity-selector-${productId}`
  );

  cart.forEach((product) => {
    if (product.productId == productId) {
      matchingItem = product;
    }
  })
  
  //const quantity = Number(quantitySelector.value);

  const quantity = 1;


  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
      deliveryOptionId: '1'
    });
  };

  updateTotalQuantity();

  saveToStorage();
};

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem)
    }
  });

  cart = newCart;

  updateTotalQuantity();

  saveToStorage();

  return cartLength
};

function updateTotalQuantity() {
  let usedQuantity = 0;

  cart.forEach((product) => {
    usedQuantity += product.quantity
  })

  totQuantity = usedQuantity;
}

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

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;

  
  cart.forEach((product) => {
    if (product.productId == productId) {
      matchingItem = product;
    };
  })

  if (!matchingItem) {
    return;
  }

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
};


