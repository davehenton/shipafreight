import React from 'react';
import { Link } from 'react-router-dom';

export const CouponSection = ({ type, className, text, link, isEndOfLine }) => {
  switch (type) {
    case 'span':
      return (
        <span className={className}>
          {text}
          {isEndOfLine ? <div className="end-of-line" /> : null}
        </span>
      );
    case 'button':
      return (
        <Link to={link}>
          <button className={className}>{text}</button>
        </Link>
      );
    default:
      return null;
  }
};

const Coupon = props => (
  <div className="coupon">
    {props.coupon.map((section, key) => (
      <CouponSection key={key} {...section} />
    ))}
  </div>
);

export default Coupon;
