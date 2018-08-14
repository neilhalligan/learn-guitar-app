import React from 'react';
import testSetup from '../../testSetup';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', () => {
  it('should render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toBe(1);
  });
});
