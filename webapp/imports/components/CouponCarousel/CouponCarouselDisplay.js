import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import Coupon from './Coupon';

export const COUPONS = [
  [
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
  ],
  [
    { text: 'Book now and get a ', type: 'span', className: 'h1' },
    { text: '10%', type: 'span', className: 'h1 orange' },
    { text: ' discount', type: 'span', className: 'h1', isEndOfLine: true },
    { text: 'Use code ', type: 'span', className: 'h2' },
    { text: 'FLAT10', type: 'span', className: 'h2 coupon-code' },
    { text: ' at checkout', type: 'span', className: 'h2', isEndOfLine: true },
    { text: 'Offer ends 31', type: 'span', className: 'h3' },
    { text: 'st', type: 'span', className: 'h3 superscript' },
    { text: ' December, 2017', type: 'span', className: 'h3' },
  ],
];

class CouponCarouselDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { couponIndex: 0 };
    this.rotateCarousel = this.rotateCarousel.bind(this);
    setTimeout(this.rotateCarousel, 4000);
  }

  rotateCarousel() {
    let couponIndex = this.state.couponIndex + 1;
    if (couponIndex === COUPONS.length) {
      couponIndex = 0;
    }
    this.setState({ couponIndex });
    setTimeout(this.rotateCarousel, 4000);
  }

  render() {
    return (
      <div className="instant-quote-header">
        <div className="welcome">
          Welcome to <span className="freight">Ship</span>
          <span className="agility">A</span>
          <span className="freight"> Next</span>
        </div>
        <div className="coupon-wrapper">
          <CSSTransitionGroup
            transitionName="carousel"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <Coupon
              key={this.state.couponIndex}
              coupon={COUPONS[this.state.couponIndex]}
            />
          </CSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default CouponCarouselDisplay;
