import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import Coupon from './Coupon';

class CouponCarouselDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { couponIndex: 0 };
    this.rotateCarousel = this.rotateCarousel.bind(this);
    setTimeout(this.rotateCarousel, 4000);
  }

  rotateCarousel() {
    let couponIndex = this.state.couponIndex + 1;
    if (couponIndex === this.props.coupons.length) {
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
              coupon={this.props.coupons[this.state.couponIndex]}
            />
          </CSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default CouponCarouselDisplay;
