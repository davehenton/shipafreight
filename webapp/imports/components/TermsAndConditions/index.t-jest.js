import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import TermsAndConditions from './index';

describe('TermsAndConditions.js', () => {
  describe('TermsAndConditions Component', () => {
    let wrapper;
    const props = { coupons: [{}, {}] };
    beforeEach(() => (wrapper = shallow(<TermsAndConditions {...props} />)));
    afterEach(() => wrapper.unmount());
    it('renders without error', () => {});
  });
});
