import { types } from './actions';

const initialState = {};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.SET_PRODUCT_QUANTITY: {
      const { pid, quantity } = payload;
      return { ...state, [pid]: { quantity } };
    }
    default:
      return state;
  }
}
