import React from 'react';

import OptionField from '../fields/OptionField';

const MOVEMENT_OPTIONS = [
  { value: 'DOOR_TO_DOOR', label: 'Door to Door' },
  { value: 'PORT_TO_DOOR', label: 'Port to Door' },
  { value: 'DOOR_TO_PORT', label: 'Door to Port' },
  { value: 'PORT_TO_PORT', label: 'Port to Port' },
];

const QuoteFormDisplay = props => (
  <div className="instant-quote-form form">
    <div className="form-title">Get a quick quote</div>
    <div className="form-section">
      <div className="form-section-title">Transport Details</div>
      <div className="form-row">
        <div className="field">
          <div className="label">Mode of transport</div>
          <div className="radio-button-group">
            <button
              className={`radio-button ${props.oceanButtonClass}`}
              onClick={props.setModeToOcean}
            >
              <div className="radio-button-icon checked" />
              <div className="icon ocean" />
              <span className="label">Ocean</span>
            </button>
            <button
              className={`radio-button ${props.airButtonClass}`}
              onClick={props.setModeToAir}
            >
              <div className="radio-button-icon" />
              <div className="icon air" />
              <span className="label">Air</span>
            </button>
          </div>
        </div>
        <div className="field">
          <div className="label">&nbsp;</div>
          <div className="field-wrapper">
            <div className="field-label">* Movement type</div>
            <OptionField
              value={props.movementType}
              options={MOVEMENT_OPTIONS}
              onChange={props.setMovementType}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="form-section">
      <div className="form-section-title">Location Details</div>
      <div className="form-row">
        <div className="field country">
          <div className="field-wrapper">
            <div className="field-label">* Origin country</div>
          </div>
        </div>
        <div className="field">
          <div className="field-wrapper">
            <div className="field-label">* Origin city</div>
          </div>
        </div>
        <div className="field country">
          <div className="field-wrapper">
            <div className="field-label">* Destination country</div>
          </div>
        </div>
        <div className="field">
          <div className="field-wrapper">
            <div className="field-label">* Destination city</div>
          </div>
        </div>
      </div>
    </div>
    <div className="form-section">
      <div className="form-section-title">Cargo Details</div>
      <div className="form-row">
        <div className="field package-type">
          <div className="field-wrapper">
            <div className="field-label">* Package type</div>
          </div>
        </div>
        <div className="field quantity">
          <div className="field-wrapper">
            <div className="field-label">* Qty</div>
          </div>
        </div>
        <div className="field dimensions">
          <div className="field-wrapper">
            <div className="field-section">
              <div className="field-label">* Unit</div>
            </div>
            <div className="field-section">
              <div className="field-label">Length</div>
            </div>
            <div className="field-section">
              <div className="field-label">Width</div>
            </div>
            <div className="field-section">
              <div className="field-label">Height</div>
            </div>
          </div>
        </div>
        <div className="field volume">
          <div className="field-wrapper">
            <div className="field-label">* CBM</div>
          </div>
        </div>
        <div className="field weight">
          <div className="field-wrapper">
            <div className="field-section">
              <div className="field-label">* Unit</div>
            </div>
            <div className="field-section">
              <div className="field-label">Per piece</div>
            </div>
            <div className="field-section">
              <div className="field-label">* Total</div>
            </div>
          </div>
        </div>
        <button className="add-row">
          <div className="icon" />
        </button>
      </div>
      <div className="form-row">
        <div className="field total">
          <div className="label">Total</div>
          <div className="field-wrapper">
            <div className="field-label">Weight in kgs</div>
          </div>
        </div>
        <div className="field revenue-ton">
          <div className="label">Revenue Tons</div>
          <div className="field-wrapper">
            <div className="field-label">Weight in tons</div>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="field description">
          <div className="field-wrapper">
            <div className="field-label">* Cargo description</div>
          </div>
        </div>
      </div>
    </div>
    <div className="form-section">
      <div className="form-section-title">Additional Details (optional)</div>
      <div className="form-row">
        <div className="field">
          <div className="field-wrapper">
            <div className="field-label">Preferred currency</div>
          </div>
        </div>
        <button className="checkbox">
          <div className="checkbox-icon" />
          <span className="label">Hazardous material</span>
        </button>
        <button className="checkbox">
          <div className="checkbox-icon" />
          <span className="label">Household goods</span>
        </button>
        <button className="checkbox">
          <div className="checkbox-icon" />
          <span className="label">Insurance required</span>
        </button>
      </div>
    </div>
    <button className="form-button">Get Instant Quote</button>
  </div>
);

export default QuoteFormDisplay;
