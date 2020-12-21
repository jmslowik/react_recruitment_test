import axios from 'axios';

export default function getProductsApi(baseUrl) {
  return {
    getAll() {
      return axios.get(`${baseUrl}/cart`);
    },
    verifyQuantity(pid, quantity) {
      return axios.post(`${baseUrl}/product/check`, { pid, quantity });
    },
  };
}
