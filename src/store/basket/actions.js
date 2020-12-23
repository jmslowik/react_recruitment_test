export const types = {
  SET_PRODUCT_QUANTITY: '[BASKET] SET_PRODUCT_QUANTITY',
  INIT_PRODUCT_QUANTITIES: '[BASKET] INIT_PRODUCT_QUANTITIES',
};

export const setProductQuantityAction = ({ pid, quantity }) => ({
  type: types.SET_PRODUCT_QUANTITY,
  payload: { pid, quantity },
});

export const initProductQuantitiesAction = (list) => ({
  type: types.INIT_PRODUCT_QUANTITIES,
  payload: list,
});
