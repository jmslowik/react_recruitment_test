import products from './products/saga';
import basket from './basket/saga';

const sagas = [
  products,
  basket,
];

function registerWithMiddleware(middleware) {
  sagas.forEach((saga) => {
    middleware.run(saga);
  });
}

export default {
  registerWithMiddleware,
};
