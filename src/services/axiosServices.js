import axios from 'axios';

export function getProducts(gender, category, count) {
  return axios.get(`/${gender}/${category}`).then( products => products.data );
};

export function getLimitedProducts(gender, category, count) {
  return axios.get(`/${gender}/${category}?count=${count}`).then( products => products.data );
};