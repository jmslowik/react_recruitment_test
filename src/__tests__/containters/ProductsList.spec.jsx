import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { dispatchCallsByTypeFilter } from '@/__tests__/__utils__';

import ProductsList from '@/containers/ProductsList';

const mockStore = configureStore([]);

describe('ProductsList container', () => {
  let store;
  const renderComponent = () => renderer.create(
    <Provider store={store}>
      <ProductsList />
    </Provider>,
  );
  const mountComponent = () => mount(
    <Provider store={store}>
      <ProductsList />
    </Provider>,
  );

  beforeEach(() => {
    store = mockStore({
      products: [
        {
          pid: 'pid-1', name: 'name 1', price: 1, isBlocked: true,
        },
        { pid: 'pid-2', name: 'name 2', price: 2 },
      ],
      basket: {
        'pid-1': { quantity: 1 },
        'pid-2': { quantity: 2 },
      },
    });

    store.dispatch = jest.fn();
  });

  it('should render with given state from Redux store', () => {
    const component = renderComponent();
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should dispatch [PRODUCTS] GET_ALL on mount first', () => {
    mountComponent();
    const callsFilter = dispatchCallsByTypeFilter('[PRODUCTS] GET_ALL');

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenNthCalledWith(1, { type: '[PRODUCTS] GET_ALL', payload: {} });
    expect(store.dispatch.mock.calls.filter(callsFilter)).toHaveLength(1);
  });

  it('should dispatch [BASKET] INIT_PRODUCT_QUANTITIES on mount', () => {
    mountComponent();
    const type = '[BASKET] INIT_PRODUCT_QUANTITIES';

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenNthCalledWith(2, { type, payload: expect.anything() });
  });
});
