import React from 'react';

const HouseholdGoodsModalDisplay = props => (
  <div className="modal household-goods-modal">
    <div className="modal-form">
      <div className="modal-header">
        <div className="household-goods-icon" />
        <div className="title">Please Note</div>
      </div>
      <div className="modal-body">
        <p>
          We do not offer shipping of household goods or other personal items.
        </p>
      </div>
      <div className="modal-footer">
        <button onClick={props.ok}>Ok</button>
      </div>
    </div>
  </div>
);

export default HouseholdGoodsModalDisplay;
