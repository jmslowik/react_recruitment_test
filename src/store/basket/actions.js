export const types = {
  SET_PRODUCT_QUANTITY: '[BASKET] SET_PRODUCT_QUANTITY',
};

export const setProductQuantityAction = ({ pid, quantity }) => ({
  type: types.SET_PRODUCT_QUANTITY,
  payload: { pid, quantity },
});
