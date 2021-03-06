import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Home from './Home';

describe('Home.js', () => {
  describe('Home Component', () => {
    let wrapper;
    beforeEach(() => (wrapper = shallow(<Home />)));
    afterEach(() => wrapper.unmount());
    it('renders without error', () => {});
  });
});
