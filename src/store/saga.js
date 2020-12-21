import products from './products/saga';

const sagas = [
  products,
];

function registerWithMiddleware(middleware) {
  sagas.forEach((saga) => {
    middleware.run(saga);
  });
}

export default {
  registerWithMiddleware,
};
