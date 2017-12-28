import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Footer from './Footer';

describe('Footer.js', () => {
  describe('Footer Component', () => {
    let wrapper;
    beforeEach(() => (wrapper = shallow(<Footer />)));
    afterEach(() => wrapper.unmount());
    it('renders without error', () => {});
  });
});
