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
