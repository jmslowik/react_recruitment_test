export const types = {
  REPLACE_PRODUCTS_LIST: '[PRODUCTS] REPLACE_PRODUCTS_LIST',
};

export const replaceProductsListAction = (list) => ({
  type: types.REPLACE_PRODUCTS_LIST,
  payload: list,
});
