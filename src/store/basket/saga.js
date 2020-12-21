import {
  all, call, put, takeEvery, debounce,
} from 'redux-saga/effects';
import api from '@/api';
import { setProductQuantityAction } from './actions';

const SET_AND_VERIFY_PRODUCT_QUANTITY_DEBOUNCE_MS = 500;

const types = {
  SET_AND_VERIFY_PRODUCT_QUANTITY: '[BASKET] SET_AND_VERIFY_PRODUCT_QUANTITY',
  SET_AND_VERIFY_PRODUCT_QUANTITY_DEBOUNCE: '[BASKET] SET_AND_VERIFY_PRODUCT_QUANTITY_DEBOUNCE',
};

export const setAndVerifyProductQuantityAction = ({ pid, quantity, min }) => ({
  type: types.SET_AND_VERIFY_PRODUCT_QUANTITY,
  payload: { pid, quantity, min },
});

export const setAndVerifyProductQuantityDebounceAction = ({ pid, quantity, min }) => ({
  type: types.SET_AND_VERIFY_PRODUCT_QUANTITY_DEBOUNCE,
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
  yield takeEvery(types.SET_AND_VERIFY_PRODUCT_QUANTITY, setAndVerifyProductQuantity);
}

function* setAndVerifyProductQuantityDebounce() {
  yield debounce(
    SET_AND_VERIFY_PRODUCT_QUANTITY_DEBOUNCE_MS,
    types.SET_AND_VERIFY_PRODUCT_QUANTITY_DEBOUNCE,
    setAndVerifyProductQuantity,
  );
}

export default function* saga() {
  yield all([
    call(watchSetAndVerifyProductQuantity),
    call(setAndVerifyProductQuantityDebounce),
  ]);
}
