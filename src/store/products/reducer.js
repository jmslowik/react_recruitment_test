import { types } from './actions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.REPLACE_PRODUCTS_LIST:
      return [...action.payload];
    default:
      return state;
  }
}
