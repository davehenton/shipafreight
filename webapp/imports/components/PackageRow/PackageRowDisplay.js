import React from 'react';

import OptionField from '../fields/OptionField';
import * as OPTS from '../options';
import NumberField from '../fields/NumberField';
import { maxTwoDecimals } from '../utils';

const DimsAppendText = {
  true: '(uncheck to enter total volume)',
  false: '(check to calculate by dimensions)',
};

const DimsLabel = {
  Ocean: props => (
    <button
      className={`checkbox ${props.useDimensionsCheckboxClass}`}
      onClick={props.toggleIsUsingDims(!props.isUsingDims)}
    >
      <div className="checkbox-icon" />
      <div className="label">
        Dimensions{' '}
        <span className="label-append">
          {DimsAppendText[props.isUsingDims]}
        </span>
      </div>
    </button>
  ),
  Air: () => <div className="label">Dimensions</div>,
};

const PackageRowDisplay = props => (
  <div className="form-row package-row">
    <div className="field package-type">
      <div className="label">&nbsp;</div>
      <div className="field-wrapper">
        <div className="field-label">* Package type</div>
        <OptionField
          value={props.packageType}
          options={props.packageTypeOptions}
          onChange={props.setPackageType}
        />
      </div>
    </div>
    <div className="field quantity">
      <div className="label">&nbsp;</div>
      <div className="field-wrapper">
        <div className="field-label">* Qty</div>
        <NumberField value={props.quantity} onChange={props.setQuantity} />
      </div>
    </div>
    <div className={`field dimensions ${props.dimensionsFieldClass}`}>
      {DimsLabel[props.modeOfTransport](props)}
      <div className="field-wrapper">
        <div className="field-section">
          <div className="field-label">* Unit</div>
          <OptionField
            value={props.dimensionsUOM}
            disabled={props.isDimsFieldDisabled}
            options={OPTS.DIMENSIONS_UOM_OPTIONS}
            onChange={props.setDimensionsUOM}
          />
        </div>
        <div className="field-section">
          <div className="field-label">Length</div>
          <NumberField
            value={props.length}
            onChange={props.setLength}
            disabled={props.isDimsFieldDisabled}
          />
        </div>
        <div className="field-section">
          <div className="field-label">Width</div>
          <NumberField
            value={props.width}
            onChange={props.setWidth}
            disabled={props.isDimsFieldDisabled}
          />
        </div>
        <div className="field-section">
          <div className="field-label">Height</div>
          <NumberField
            value={props.height}
            onChange={props.setHeight}
            disabled={props.isDimsFieldDisabled}
          />
        </div>
      </div>
    </div>
    <div className={`field volume ${props.volumeFieldClass}`}>
      <div className="label">Volume</div>
      <div className="field-wrapper">
        <div className="field-label">* CBM</div>
        <NumberField
          value={props.volume}
          onChange={props.setVolume}
          disabled={props.isVolumeFieldDisabled}
        />
      </div>
    </div>
    <div className="field weight">
      <div className="label">Weight</div>
      <div className="field-wrapper">
        <div className="field-section">
          <div className="field-label">* Unit</div>
          <OptionField
            value={props.weightUOM}
            options={OPTS.WEIGHT_UOM_OPTIONS}
            onChange={props.setWeightUOM}
          />
        </div>
        <div className="field-section">
          <div className="field-label">* Per piece</div>
          <NumberField
            value={props.weightPerPiece}
            onChange={props.setWeightPerPiece}
          />
        </div>
        <div className="field-section">
          <div className="field-label">Total</div>
          <div className="non-editable-field-value numeric">
            {maxTwoDecimals(props.weightTotal)}
          </div>
        </div>
      </div>
    </div>
    <button
      className={props.addOrRemoveCargoRowButtonClass}
      onClick={props.addOrRemoveCargoRow}
    >
      <div className="icon" />
    </button>
  </div>
);

export default PackageRowDisplay;
