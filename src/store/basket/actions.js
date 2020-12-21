export const types = {
  SET_PRODUCT_COUNT: '[BASKET] SET_PRODUCT_COUNT',
};

export const setProductQuantityAction = ({ pid, quantity }) => ({
  type: types.SET_PRODUCT_COUNT,
  payload: { pid, quantity },
});
