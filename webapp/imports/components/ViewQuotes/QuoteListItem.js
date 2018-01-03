import React from 'react';

const QuoteListItem = props => (
  <div className="quote-list-item">
    <div className="section">
      <div className="section-left">
        <div className="quote-number">Quote No. : QT211714074</div>
        <div className="start-end-locations">
          <div className="location">
            <div className="label">Origin City</div>
            <div className="value">Miami Gardens, Florida</div>
          </div>
          <div className="arrows" />
          <div className="location">
            <div className="label">Destination City</div>
            <div className="value">Beijing, Beijing</div>
          </div>
        </div>
      </div>
      <div className="section-right">
        <div className="submission-status">
          Submitted to ShipA Freight service desk
        </div>
      </div>
    </div>
    <div className="section" />
    <div className="section">
      <div className="routing">
        <div className="routing-node">
          <div className="routing-node-icon" />
          <div className="routing-node-label">Miami Gardens</div>
        </div>
        <div className="routing-connector truck" />
        <div className="routing-node">
          <div className="routing-node-icon" />
          <div className="routing-node-label">USMIA Miami</div>
        </div>
        <div className="routing-connector ship" />
        <div className="routing-node">
          <div className="routing-node-icon" />
          <div className="routing-node-label">CNTNG Tianjin Pt</div>
        </div>
        <div className="routing-connector truck" />
        <div className="routing-node">
          <div className="routing-node-icon" />
          <div className="routing-node-label">Beijing</div>
        </div>
      </div>
    </div>
  </div>
);

export default QuoteListItem;
