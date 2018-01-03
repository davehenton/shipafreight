import React from 'react';

const QuoteListItem = props => (
  <div className="quote-list-item">
    <div className="section">
      <div className="row">
        <div className="header-left">
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
        <div className="header-right">
          <div className="submission-status">
            Submitted to ShipA Freight service desk
          </div>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="row">
        <div className="data-element col-3">
          <div className="label">Mode of transport</div>
          <div className="value">
            <i className="ship-icon" />Ocean
          </div>
        </div>
        <div className="data-element col-3">
          <div className="label">Movement type</div>
          <div className="value">Door to door</div>
        </div>
        <div className="data-element col-3">
          <div className="label">Enquiry date</div>
          <div className="value">28 December 2017</div>
        </div>
        <div className="data-element col-3">
          <div className="label">Quote valid until</div>
          <div className="value">N/A</div>
        </div>
      </div>
      <div className="link-group">
        <div className="link">View More</div>
        <div className="link">Modify Quote</div>
        <div className="link">Save as Template</div>
      </div>
    </div>
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
