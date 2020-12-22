import { apiBaseUrl } from '@/config';
import getProductsApi from './products';

export default {
  products: getProductsApi(apiBaseUrl),
};
