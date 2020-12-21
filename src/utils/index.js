// eslint-disable-next-line import/prefer-default-export
export const parsePrice = (price) => {
  switch (typeof price) {
    case 'string':
      return parseFloat(price);
    case 'number':
      return price;
    default:
      return NaN;
  }
};

export const getSum = (products, quantities) => (products && quantities
  ? products.reduce((sum, { price, pid }) => {
    const { quantity = 0 } = quantities[pid] || {};
    return sum + (parsePrice(price) * quantity);
  }, 0)
  : 0);

export const getTotalQuantity = (quantities) => (quantities
  ? Object.values(quantities).reduce((sum, { quantity }) => sum + quantity, 0)
  : 0);
