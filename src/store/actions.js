import axios from 'axios';

const getProducts = ({ commit }) => {
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then((result) => {
      commit('SET_PRODUCTS', result.data);
    });
};

const getProduct = ({ commit }, productId) => {
  axios.get(`https://jsonplaceholder.typicode.com/users/${productId}`)
    .then((result) => {
      commit('SET_PRODUCT', result.data);
      console.log('RESP:::', result.data);
    });
};

export { getProducts, getProduct };
