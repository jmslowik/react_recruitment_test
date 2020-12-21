import {
  all, call, put, takeEvery,
} from 'redux-saga/effects';
import api from '@/api';
import { setProductQuantityAction } from './actions';

const types = {
  SET_AND_VERIFY_PRODUCT_COUNT: '[BASKET] SET_AND_VERIFY_PRODUCT_COUNT',
};

export const setAndVerifyProductQuantityAction = ({ pid, quantity, min }) => ({
  type: types.SET_AND_VERIFY_PRODUCT_COUNT,
  payload: { pid, quantity, min },
});

function* setAndVerifyProductQuantity({ payload }) {
  try {
    const { pid, quantity, min } = payload;
    const { data } = yield call(api.products.verifyQuantity, pid, quantity);
    const newQuantity = (data && !data.isError && !!data.success) ? quantity : min;
    yield put(setProductQuantityAction({ pid, quantity: newQuantity }));
  } catch (err) {
    console.error(err);
  }
}

function* watchSetAndVerifyProductQuantity() {
  yield takeEvery(types.SET_AND_VERIFY_PRODUCT_COUNT, setAndVerifyProductQuantity);
}

export default function* saga() {
  yield all([
    call(watchSetAndVerifyProductQuantity),
  ]);
}
