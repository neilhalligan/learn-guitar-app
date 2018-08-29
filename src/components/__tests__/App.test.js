import React from 'react';
import testSetup from '../../testSetup';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('should render Menu', () => {
    expect(wrapper.find('MenuList').length).toBe(1);
  });

  it('should render Guitar', () => {
    expect(wrapper.find('Guitar').length).toBe(1);
  });
});
