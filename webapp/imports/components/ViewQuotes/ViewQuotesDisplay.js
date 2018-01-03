import React from 'react';

import TextField from '../fields/TextField';
import QuoteListItem from './QuoteListItem';
import Footer from '../Footer/Footer';

const ViewQuotesDisplay = props => (
  <div className="list-page view-quotes">
    <div className="header">
      <div className="title">Your Quotes</div>
      <div className="search-box">
        <TextField value={props.searchText} onChange={props.setSearchText} />
        <i className={`cancel-icon ${props.cancelSearchIconClass}`} />
      </div>
    </div>
    <div className="tabs">
      <div className="tab active">
        Active <span className="count">(5)</span>
      </div>
      <div className="tab">
        Expired <span className="count">(0)</span>
      </div>
      <div className="tab">
        Templates <span className="count">(0)</span>
      </div>
    </div>
    <div className="quote-list">
      <QuoteListItem />
    </div>
    <Footer />
  </div>
);

export default ViewQuotesDisplay;
