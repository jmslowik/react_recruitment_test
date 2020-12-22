import React from 'react';
import ProductsList from '@/containers/ProductsList';
import LocaleContext from '@/contexts/LocaleContext';
import { locale, currency } from '@/config';

const App = () => (
  <LocaleContext.Provider value={{ locale, currency }}>
    <ProductsList />
  </LocaleContext.Provider>
);

export default App;
