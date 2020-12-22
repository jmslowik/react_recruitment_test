import { types } from '@/store/basket/actions';
import reducer from '@/store/basket/reducer';

describe('basket', () => {
  describe('reducer', () => {
    it('should return the initial state', () => {
      const state = reducer(undefined, {});
      expect(state).toEqual({});
    });

    describe('SET_PRODUCT_QUANTITY', () => {
      it('should add new product with quantity', () => {
        const pid = 'some-pid';
        const quantity = 1;
        const oldState = {
          'some-other-pid': { quantity: 2 },
        };
        const state = reducer(oldState, {
          type: types.SET_PRODUCT_QUANTITY,
          payload: { pid, quantity },
        });
        expect(state).toEqual({ ...oldState, [pid]: { quantity } });
      });

      it('should replace product quantity', () => {
        const pid = 'some-pid';
        const quantity = 1;
        const oldState = {
          'some-other-pid': { quantity: 2 },
          [pid]: { quantity: 4 },
        };
        const state = reducer(oldState, {
          type: types.SET_PRODUCT_QUANTITY,
          payload: { pid, quantity },
        });
        expect(state).toEqual({ ...oldState, [pid]: { quantity } });
      });
    });
  });
});
