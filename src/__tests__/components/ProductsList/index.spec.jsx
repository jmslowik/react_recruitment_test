import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import ProductsList from '@/components/ProductsList/index';

describe('ProductsList', () => {
  it('should render product list', () => {
    const wrapper = mount(<ProductsList />);
    expect(wrapper.contains(<h3>Lista produktów</h3>)).toBeTruthy();
  });

  it('should render correctly', () => {
    const tree = renderer.create(<ProductsList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
