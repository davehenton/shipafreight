import React from 'react';
import { Translate } from 'react-redux-i18n';

import {
  maxZeroDecimals,
  maxTwoDecimals,
  maxThreeDecimals,
  nearestHalf,
} from '../utils';
import OptionField from '../fields/OptionField';
import * as OPTS from '../options';
import NumberField from '../fields/NumberField';
import TextField from '../fields/TextField';

const CargoSection = props => (
  <div className="form-section">
    <div className="form-section-title">Cargo Details</div>
    {props.CargoRows}
    <div className="form-row">
      <div className={`field total ${props.weightAndCBMTotalsClass}`}>
        <div className="label">Total</div>
        <div className="field-wrapper">
          <div className="field-section">
            <div className="field-label">Weight in kg</div>
            <div className="non-editable-field-value numeric">
              {maxTwoDecimals(props.weightInKG)}
            </div>
          </div>
          <div className="field-section">
            <div className="field-label">CBM</div>
            <div className="non-editable-field-value numeric">
              {maxThreeDecimals(props.volumeInCBM)}
            </div>
          </div>
        </div>
      </div>
      <div className={`field total ${props.weightTotalClass}`}>
        <div className="label">Total weight in kg</div>
        <div className="field-wrapper">
          <div className="field-label">Total weight</div>
          <div className="non-editable-field-value numeric">
            {maxTwoDecimals(props.weightInKG)}
          </div>
        </div>
      </div>
      <div className={`field revenue-ton ${props.revenueTonsClass}`}>
        <div className="label">Revenue Tons</div>
        <div className="field-wrapper">
          <div className="field-label">Weight in tons</div>
          <div className="non-editable-field-value numeric">
            {maxZeroDecimals(props.revenueTons)}
          </div>
        </div>
      </div>
      <div
        className={`field chargeable-weight ${
          props.chargeableAndVolumetricWeightClass
        }`}
      >
        <div className="label">Chargeable &amp; Volumetric Weight</div>
        <div className="field-wrapper">
          <div className="field-section">
            <div className="field-label">Chargeable weight in kg</div>
            <div className="non-editable-field-value numeric">
              {nearestHalf(props.chargeableWeightInKG)}
            </div>
          </div>
          <div className="field-section">
            <div className="field-label">Volumetric weight in kg</div>
            <div className="non-editable-field-value numeric">
              {maxThreeDecimals(props.volumetricWeightInKG)}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="form-row">
      <div className="field description">
        <div className="field-wrapper">
          <div className="field-label">* Cargo description</div>
          <TextField
            value={props.description}
            onChange={props.setDescription}
          />
        </div>
      </div>
    </div>
    <div className="form-row">
      <button
        className={`checkbox ${props.isHazardousClass}`}
        onClick={props.setIsHazardous(!props.isHazardous)}
      >
        <div className="checkbox-icon" />
        <span className="label">Hazardous material</span>
        <div className="tooltip">
          <div className="tooltip-text">
            <div className="tooltip-text-line">
              If your cargo contains hazardous material, please check the box
              and then select the class of hazardous goods. Our service team
              will send your request to our specialized representatives.
            </div>
          </div>
        </div>
      </button>
      <button
        className={`checkbox ${props.isHouseholdGoodsClass}`}
        onClick={props.setIsHouseholdGoods(!props.isHouseholdGoods)}
      >
        <div className="checkbox-icon" />
        <span className="label">Household goods</span>
        <div className="tooltip">
          <div className="tooltip-text">
            <div className="tooltip-text-line">
              We do not offer shipping of household goods or other personal
              items.
            </div>
          </div>
        </div>
      </button>
    </div>
    <div className={props.hazardousClassClass}>
      <div className="hazardous-class">
        <div className="check-circle" />
        <Translate value={`hazardousClasses.${props.hazardousClass}`} />
      </div>
    </div>
  </div>
);

export default CargoSection;
