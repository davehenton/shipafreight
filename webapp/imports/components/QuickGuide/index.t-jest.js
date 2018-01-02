import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import QuickGuide from './index';

describe('QuickGuide.js', () => {
  describe('QuickGuide Component', () => {
    let wrapper;
    const props = { coupons: [{}, {}] };
    beforeEach(() => (wrapper = shallow(<QuickGuide {...props} />)));
    afterEach(() => wrapper.unmount());
    it('renders without error', () => {});
  });
});
