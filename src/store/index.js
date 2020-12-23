import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware)),
);

saga.registerWithMiddleware(sagaMiddleware);
