import './data/cart.js';
import { cart, addtoCart } from './data/cart.js';
import { products, loadProducts } from './data/products.js';
import { formatCurrency } from "./utils/money.js";

loadProducts(renderProductsGrid);

function renderProductsGrid() {
  
  updateCartQuantity();

  let productsHTML = '';

  const url = new URL(window.location.href);

  const search = url.searchParams.get('search');

  let filteredProducts = products;

  if (search) {
    filteredProducts = products.filter(product => {
      let searchKeywords;

      product.keywords.forEach(keyword => {
        searchKeywords = keyword.toLowerCase().includes(search.toLowerCase());
      });

      
      
      return product.name.toLowerCase().includes(search.toLowerCase()) || searchKeywords;
    })
  };

  filteredProducts.forEach((product) => {

      productsHTML += `
      <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="${product.getStarsUrl()}">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${product.getPrice()}
      </div>

      <div class="product-quantity-container js-product-quantity-container">
        <select class="js-quantity-selector-${product.id}">
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      ${product.extraInfoHTML()} 

      <div class="product-spacer"></div>

      <div class="added-to-cart js-added-to-cart-${product.id}">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id="${product.id}"
      >
        Add to Cart
      </button>
      </div>
    `;
  });

  document.querySelector('.js-products-grid').innerHTML = productsHTML;

  function updateCartQuantity() {

    let cartQuantity = 0;

    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

    return cartQuantity;
  };


  let timeoutId = [];

  function addedMessage(productId) {
    const addedButton = document.querySelector(`.js-added-to-cart-${productId}`);

    clearTimeout(timeoutId);

    timeoutId.push(setTimeout(() => { addedButton.classList.remove('cssClass') }, 2000));

    addedButton.classList.add('cssClass');
  }

  document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
      
  const { productId } = button.dataset

      addedMessage(productId);

      addtoCart(productId);

      updateCartQuantity();  
    })
  });

  document.querySelector('.js-search-button').addEventListener('click', () => {
    const search = document.querySelector('.js-search-bar').value;

    window.location.href = `amazon.html?search=${search}`;
  })
};

