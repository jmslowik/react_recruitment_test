import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import Item from '@/components/ProductsList/Item';

describe('Item', () => {
  const After = () => <div className="after-prop">after</div>;
  const name = 'name';
  const price = 11.1;

  it('should render without throwing an error', () => {
    const wrapper = shallow(<Item />);
    expect(wrapper.is('.row')).toBeTruthy();
  });

  it('should contain name under .item', () => {
    const wrapper = shallow(<Item name={name} />);
    expect(wrapper.find('.item').text()).toMatch(/^name:/);
  });

  it('should contain price under .price', () => {
    const wrapper = shallow(<Item price={11} />);
    expect(wrapper.find('.price').text()).toMatch(/^11/);
  });

  it('should format price correctly', () => {
    const wrapper = shallow(<Item price={price} />);
    expect(wrapper.find('.price').text()).toEqual('11,10 zł');
  });

  it('should inject after conponent under .after', () => {
    const wrapper = mount(<Item after={<After />} />);
    expect(wrapper.find('.after').first().contains(<After />)).toBeTruthy();
  });

  it('should render correctly', () => {
    const tree = renderer.create(<Item name={name} price={price} after={<After />} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
