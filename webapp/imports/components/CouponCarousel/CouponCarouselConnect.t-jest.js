import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Meteor } from 'meteor/meteor';

Enzyme.configure({ adapter: new Adapter() });

import CouponCarouselConnect, * as CCC from './CouponCarouselConnect';
import * as AT from '../../state/actionTypes';

describe('CouponCarouselConnect.js', () => {
  describe('mapStateToProps Function', () => {
    it('extracts coupons and hasFetched', () => {
      const state = { couponCarousel: { coupons: [{}], hasFetched: false } };
      const props = CCC.mapStateToProps(state);
      expect(props.coupons).toEqual([{}]);
      expect(props.hasFetched).toBe(false);
    });
  });
  describe('getDispatcher Function', () => {
    it('dispatches a set coupon carousel prop action', () => {
      const dispatch = jest.fn();
      CCC.getDispatcher(dispatch, 'prop')('value');
      const action = dispatch.mock.calls[0][0];
      expect(action.type).toBe(AT.SET_COUPON_CAROUSEL_PROP);
      expect(action.prop).toBe('prop');
      expect(action.value).toBe('value');
    });
  });
  describe('mapDispatchToProps Function', () => {
    it('returns an object', () => {
      const dispatch = jest.fn();
      expect(typeof CCC.mapDispatchToProps(dispatch)).toBe('object');
    });
  });
  describe('handleCouponsFetchResponse', () => {
    it('calls setCoupons with the result', () => {
      const setCoupons = jest.fn();
      CCC.handleCouponsFetchResponse(setCoupons)('err', [{ content: [] }]);
      expect(setCoupons.mock.calls[0][0]).toEqual([CCC.DEFAULT_COUPON, []]);
    });
    it('does not call setCoupons if there is no result', () => {
      const setCoupons = jest.fn();
      CCC.handleCouponsFetchResponse(setCoupons)('err');
      expect(setCoupons.mock.calls.length).toBe(0);
    });
  });
  describe('couponFetcher Function', () => {
    it('fetches coupons if they have not been fetched before', () => {
      const props = {
        hasFetched: false,
        setHasFetched: jest.fn(),
        coupons: [],
        setCoupons: jest.fn(),
      };
      CCC.couponFetcher(props);
      expect(props.setHasFetched.mock.calls[0][0]).toBe(true);

      props.hasFetched = true;
      props.setHasFetched = jest.fn();
      CCC.couponFetcher(props);
      expect(props.setHasFetched).not.toHaveBeenCalled();
    });
  });
});
