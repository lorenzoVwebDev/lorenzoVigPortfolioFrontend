import {renderOrdersPage} from './data/ordersSummary.js';
import { loadProductsFetch } from './data/products.js';

async function getProducts() {

  await loadProductsFetch();

  renderOrdersPage();
} 

getProducts();


