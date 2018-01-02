import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import NavBarDisplay from './NavBarDisplay';

describe('NavBarDisplay.js', () => {
  describe('NavBarDisplay Component', () => {
    let wrapper;
    beforeEach(() => (wrapper = shallow(<NavBarDisplay />)));
    afterEach(() => wrapper.unmount());
    it('renders without error', () => {});
  });
});
