import React from 'react';

import QuoteForm from '../QuoteForm';

const Home = () => (
  <div className="home">
    <div className="instant-quote">
      <div className="instant-quote-header">
        <div className="welcome">
          Welcome to <span className="freight">Ship</span>
          <span className="agility">A</span>{' '}
          <span className="freight">Next</span>
        </div>
        <div className="title">Quote, Book, Pay and Track Freight Online</div>
        <div className="subtitle">Get instant quotes when you want them</div>
        <button>Learn More</button>
      </div>
      <QuoteForm />
    </div>
  </div>
);

export default Home;
