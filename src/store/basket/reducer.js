import { types } from './actions';

const initialState = {};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.SET_PRODUCT_QUANTITY: {
      const { pid, quantity } = payload;
      return { ...state, [pid]: { quantity } };
    }
    case types.INIT_PRODUCT_QUANTITIES: {
      const list = payload;
      return {
        ...list.reduce((basket, { pid, min }) => (
          { ...basket, [pid]: { quantity: min || 0 } }
        ), {}),
        ...state,
      };
    }
    default:
      return state;
  }
}
