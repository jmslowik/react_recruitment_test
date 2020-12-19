import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

import App from '@/components/App/App';

describe('App', () => {
  it('should render without throwing an error', function () {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<h3>Lista produktów</h3>)).toBe(true);
  });

  it('should be selectable by class "container"', function () {
    const wrapper = shallow(<App />);
    expect(wrapper.is('.container')).toBe(true);
  });

  it('should mount in a full DOM', function () {
    const wrapper = mount(<App />);
    expect(wrapper.find('.container').length).toBe(1);
  });

  it('should render to static HTML', function () {
    const wrapper = render(<App />)
    expect(wrapper.find('li').text()).toEqual('Patelnia, cena: 89,99zł');
  });

  it('should render correctly', function () {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot();
  });
});