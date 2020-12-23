import {
  types,
  setProductQuantityAction,
} from '@/store/basket/actions';

describe('basket', () => {
  describe('actions', () => {
    it('should create an action to add a todo', () => {
      const pid = 'sone-id';
      const quantity = 1;
      const expectedAction = {
        type: types.SET_PRODUCT_QUANTITY,
        payload: { pid, quantity },
      };
      expect(setProductQuantityAction({ pid, quantity })).toEqual(expectedAction);
    });
  });
});
