import axios from 'axios';

export default function getProductsApi(baseUrl) {
  return {
    getAll() {
      return axios.get(`${baseUrl}/cart`);
    },
  };
}
