export function productByIdSelector(store) {
  return (pid) => store.basket[pid];
}

export function basketSelector(store) {
  return store.basket;
}
