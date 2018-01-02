import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Coupon, * as C from './Coupon';
import { DEFAULT_COUPON } from './CouponCarouselConnect';

describe('Coupon.js', () => {
  describe('Coupon Component', () => {
    let wrapper;
    const props = { coupon: DEFAULT_COUPON };
    beforeEach(() => (wrapper = shallow(<Coupon {...props} />)));
    afterEach(() => wrapper.unmount());
    it('renders without error', () => {});
  });
  describe('CouponSection Component', () => {
    let wrapper;
    beforeEach(() => (wrapper = shallow(<C.CouponSection />)));
    afterEach(() => wrapper.unmount());
    it('renders null without props', () => {
      expect(wrapper.name()).toBe(null);
    });
    it('renders a span if type is span', () => {
      wrapper.setProps({ type: 'span' });
      expect(wrapper.name()).toBe('span');
    });
    it('renders a button inside a Link if type is button', () => {
      wrapper.setProps({ type: 'button' });
      expect(wrapper.name()).toBe('Link');
      expect(wrapper.children().name()).toBe('button');
    });
    it('renders an end of line div if isEndOfLine is true', () => {
      wrapper.setProps({ type: 'span', isEndOfLine: true });
      expect(
        wrapper.containsMatchingElement(<div className="end-of-line" />)
      ).toBe(true);
    });
  });
});
