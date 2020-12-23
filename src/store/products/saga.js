import {
  all, call, put, takeEvery,
} from 'redux-saga/effects';
import api from '@/api';
import { replaceProductsListAction } from './actions';

const types = {
  GET_ALL: '[PRODUCTS] GET_ALL',
};

export const getAllAction = () => ({
  type: types.GET_ALL,
  payload: {},
});

export function* getAll() {
  try {
    const res = yield call(api.products.getAll);
    yield put(replaceProductsListAction(res.data));
  } catch (err) {
    console.error(err);
  }
}

export function* watchGetAll() {
  yield takeEvery(types.GET_ALL, getAll);
}

export default function* saga() {
  yield all([
    call(watchGetAll),
  ]);
}
