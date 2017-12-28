import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import NavBar from './NavBar';

describe('NavBar.js', () => {
  describe('NavBar Component', () => {
    let wrapper;
    beforeEach(() => (wrapper = shallow(<NavBar />)));
    afterEach(() => wrapper.unmount());
    it('renders without error', () => {});
  });
});
