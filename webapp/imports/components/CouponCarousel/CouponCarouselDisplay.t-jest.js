import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import CouponCarouselDisplay from './CouponCarouselDisplay';

describe('CouponCarouselDisplay.js', () => {
  describe('CouponCarouselDisplay Component', () => {
    let wrapper;
    const props = { coupons: [{}, {}] };
    beforeEach(() => (wrapper = shallow(<CouponCarouselDisplay {...props} />)));
    afterEach(() => wrapper.unmount());
    it('renders without error', () => {});
    it('rotates the carousel', () => {
      expect(wrapper.state('couponIndex')).toBe(0);
      wrapper.instance().rotateCarousel();
      expect(wrapper.state('couponIndex')).toBe(1);
      wrapper.instance().rotateCarousel();
      expect(wrapper.state('couponIndex')).toBe(0);
    });
  });
});
