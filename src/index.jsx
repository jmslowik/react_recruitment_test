import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from '@/components/App/App';
import store from '@/store';
import 'antd/dist/antd.css';

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);
