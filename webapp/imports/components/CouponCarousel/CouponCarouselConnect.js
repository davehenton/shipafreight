import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import React from 'react';

import { setCouponCarouselProp } from '../../state/actionCreators';
import CouponCarouselDisplay from './CouponCarouselDisplay';

// Extract coupons and hasLoaded from couponCarousel
export const mapStateToProps = ({
  couponCarousel: { coupons, hasFetched },
}) => ({ coupons, hasFetched });

// Generic dispatcher
export const getDispatcher = (dispatch, prop) => value =>
  dispatch(setCouponCarouselProp(prop, value));

// Map dispatch to props
export const mapDispatchToProps = dispatch => ({
  setHasFetched: getDispatcher(dispatch, 'hasFetched'),
  setCoupons: getDispatcher(dispatch, 'coupons'),
});

export const DEFAULT_COUPON = [
  {
    text: 'Quote, Book, Pay and Track Freight Online',
    type: 'span',
    className: 'h1',
    isEndOfLine: true,
  },
  {
    text: 'Get instant quotes when you want them',
    type: 'span',
    className: 'h2',
    isEndOfLine: true,
  },
  { text: 'Learn More', type: 'button', link: '/learn-more' },
];

// Set coupons to the response
export const handleCouponsFetchResponse = setCoupons => (err, res) =>
  res && setCoupons([DEFAULT_COUPON, ...res.map(coupon => coupon.content)]);

// Fetch coupons if they haven't been fetched before and pass props on to
// CouponCarouselDisplay
export const couponFetcher = ({
  hasFetched,
  setHasFetched,
  coupons,
  setCoupons,
}) => {
  if (!hasFetched) {
    Meteor.call('fetch.coupons', handleCouponsFetchResponse(setCoupons));
    setHasFetched(true);
  }
  return (
    <CouponCarouselDisplay
      coupons={coupons.length === 0 ? [DEFAULT_COUPON] : coupons}
    />
  );
};

const CouponCarouselConnect = connect(mapStateToProps, mapDispatchToProps)(
  couponFetcher
);

export default CouponCarouselConnect;
