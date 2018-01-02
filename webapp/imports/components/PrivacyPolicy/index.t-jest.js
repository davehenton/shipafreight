import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import PrivacyPolicy from './index';

describe('PrivacyPolicy.js', () => {
  describe('PrivacyPolicy Component', () => {
    let wrapper;
    const props = { coupons: [{}, {}] };
    beforeEach(() => (wrapper = shallow(<PrivacyPolicy {...props} />)));
    afterEach(() => wrapper.unmount());
    it('renders without error', () => {});
  });
});
