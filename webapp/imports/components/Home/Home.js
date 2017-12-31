import React from 'react';

import CouponCarousel from '../CouponCarousel';
import QuoteForm from '../QuoteForm';

const Home = () => (
  <div className="home">
    <div className="instant-quote">
      <CouponCarousel />
      <QuoteForm />
    </div>
  </div>
);

export default Home;
