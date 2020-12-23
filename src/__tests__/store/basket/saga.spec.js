import { takeEvery, debounce } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import {
  setAndVerifyProductQuantity,
  watchSetAndVerifyProductQuantity,
  setAndVerifyProductQuantityDebounce,
} from '@/store/basket/saga';
import api from '@/api';
import { setProductQuantityAction } from '@/store/basket/actions';

jest.mock('@/api', () => ({
  __esModule: true,
  default: { products: { verifyQuantity: jest.fn() } },
}));

jest.mock('@/store/basket/actions', () => ({
  __esModule: true,
  setProductQuantityAction: jest.fn(),
}));

describe('basket', () => {
  describe('saga', () => {
    const data = { success: true };
    api.products.verifyQuantity.mockResolvedValue({ data });
    setProductQuantityAction.mockReturnValue({});

    beforeEach(() => {
      api.products.verifyQuantity.mockClear();
      setProductQuantityAction.mockClear();
    });

    describe('watchSetAndVerifyProductQuantity', () => {
      const genObject = watchSetAndVerifyProductQuantity();

      it('should wait for every [BASKET] SET_AND_VERIFY_PRODUCT_QUANTITY action and call setAndVerifyProductQuantity', () => {
        expect(genObject.next().value)
          .toEqual(takeEvery('[BASKET] SET_AND_VERIFY_PRODUCT_QUANTITY', setAndVerifyProductQuantity));
      });

      it('should be done on next iteration', () => {
        expect(genObject.next().done).toBeTruthy();
      });
    });

    describe('setAndVerifyProductQuantityDebounce', () => {
      const genObject = setAndVerifyProductQuantityDebounce();

      it('should debounce 500ms every [BASKET] SET_AND_VERIFY_PRODUCT_QUANTITY_DEBOUNCE action and call setAndVerifyProductQuantity', () => {
        expect(genObject.next().value)
          .toEqual(debounce(
            500,
            '[BASKET] SET_AND_VERIFY_PRODUCT_QUANTITY_DEBOUNCE',
            setAndVerifyProductQuantity,
          ));
      });

      it('should be done on next iteration', () => {
        expect(genObject.next().done).toBeTruthy();
      });
    });

    describe('setAndVerifyProductQuantity', () => {
      const payload = {
        pid: 'some-pid',
        quantity: 2,
        min: 1,
      };
      let dispatched = [];
      const run = () => runSaga({
        dispatch: (action) => dispatched.push(action),
      }, setAndVerifyProductQuantity, { payload });

      beforeEach(() => {
        dispatched = [];
      });

      it('should call api.products.verifyQuantity', async (done) => {
        await run();

        expect(api.products.verifyQuantity).toHaveBeenCalledTimes(1);
        expect(api.products.verifyQuantity).toHaveBeenCalledWith(payload.pid, payload.quantity);
        done();
      });

      it('should put setProductQuantityAction', async (done) => {
        await run();

        expect(setProductQuantityAction).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([setProductQuantityAction()]);
        done();
      });

      it('should put setProductQuantityAction with quantity from payload when api call is success', async (done) => {
        await run();
        expect(setProductQuantityAction)
          .toHaveBeenCalledWith({ pid: payload.pid, quantity: payload.quantity });
        done();
      });

      it('should put setProductQuantityAction with quantity set to min api call isError', async (done) => {
        const errorData = { isError: true, success: true };
        api.products.verifyQuantity.mockResolvedValueOnce({ data: errorData });
        await run();
        expect(setProductQuantityAction)
          .toHaveBeenCalledWith({ pid: payload.pid, quantity: payload.min });
        done();
      });

      it('should put setProductQuantityAction with quantity set to min api call has no success', async (done) => {
        const errorData = { success: false };
        api.products.verifyQuantity.mockResolvedValueOnce({ data: errorData });
        await run();
        expect(setProductQuantityAction)
          .toHaveBeenCalledWith({ pid: payload.pid, quantity: payload.min });
        done();
      });
    });
  });
});
