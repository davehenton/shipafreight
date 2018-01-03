import React from 'react';

import CouponCarousel from '../CouponCarousel';
import QuoteForm from '../QuoteForm';
import Footer from '../Footer/Footer';

const Home = () => (
  <div className="home">
    <div className="instant-quote">
      <CouponCarousel />
      <QuoteForm />
    </div>
    <Footer />
  </div>
);

export default Home;
