import getProductsApi from './products';

const baseUrl = 'http://localhost:3030/api';

export default {
  products: getProductsApi(baseUrl),
};
