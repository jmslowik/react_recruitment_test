import {
  productByIdSelector,
  basketSelector,
} from '@/store/basket/selectors';

describe('basket', () => {
  describe('selectors', () => {
    const basket = {
      'pid-1': {
        quantity: 1,
      },
      'pid-2': {
        quantity: 2,
      },
    };
    const store = { basket };
    describe('productByIdSelector', () => {
      it('should return quantity by product pid', () => {
        const productById = productByIdSelector(store);
        expect(productById('pid-2')).toEqual(basket['pid-2']);
      });
    });

    describe('basketSelector', () => {
      it('should return basket', () => {
        expect(basketSelector(store)).toEqual(basket);
      });
    });
  });
});
