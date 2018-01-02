import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import LearnMore from './index';

describe('LearnMore.js', () => {
  describe('LearnMore Component', () => {
    let wrapper;
    const props = { coupons: [{}, {}] };
    beforeEach(() => (wrapper = shallow(<LearnMore {...props} />)));
    afterEach(() => wrapper.unmount());
    it('renders without error', () => {});
  });
});
