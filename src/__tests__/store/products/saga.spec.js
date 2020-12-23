import { takeEvery, call } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import { getAll, watchGetAll } from '@/store/products/saga';
import api from '@/api';
import { replaceProductsListAction } from '@/store/products/actions';

jest.mock('@/api', () => ({
  __esModule: true,
  default: { products: { getAll: jest.fn() } },
}));

jest.mock('@/store/products/actions', () => ({
  __esModule: true,
  replaceProductsListAction: jest.fn(),
}));

describe('products', () => {
  describe('saga', () => {
    const data = 'some-data';
    api.products.getAll.mockResolvedValue({ data });
    replaceProductsListAction.mockReturnValue([]);

    beforeEach(() => {
      api.products.getAll.mockClear();
      replaceProductsListAction.mockClear();
    });

    describe('watchGetAll', () => {
      const genObject = watchGetAll();

      it('should wait for every [PRODUCTS] GET_ALL action and call getAll', () => {
        expect(genObject.next().value)
          .toEqual(takeEvery('[PRODUCTS] GET_ALL', getAll));
      });

      it('should be done on next iteration', () => {
        expect(genObject.next().done).toBeTruthy();
      });
    });
    describe('getAll', () => {
      const genObject = getAll();

      it('should call api.products.getAll on first iteration', () => {
        expect(genObject.next().value).toEqual(call(api.products.getAll));
      });

      it('should put replaceProductsListAction() on next iteration', async (done) => {
        const dispatched = [];
        await runSaga({
          dispatch: (action) => dispatched.push(action),
        }, getAll);

        expect(replaceProductsListAction).toHaveBeenCalledTimes(1);
        expect(replaceProductsListAction).toHaveBeenCalledWith(data);
        expect(dispatched).toEqual([replaceProductsListAction()]);
        done();
      });
    });
  });
});
