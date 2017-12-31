import React from 'react';

export const CouponSection = ({ type, className, text, isEndOfLine }) => {
  switch (type) {
    case 'span':
      return (
        <span className={className}>
          {text}
          {isEndOfLine ? <div className="end-of-line" /> : null}
        </span>
      );
    case 'button':
      return <button className={className}>{text}</button>;
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
