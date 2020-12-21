import { combineReducers } from 'redux';
import products from './products/reducer';
import basket from './basket/reducer';

export default combineReducers({
  products,
  basket,
});
