import React from 'react';

import OptionField from '../fields/OptionField';
import * as OPTS from '../options';
import NumberField from '../fields/NumberField';

const ContainerRowDisplay = props => (
  <div className="form-row">
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
    <div className="field container-type">
      <div className="label">Container type</div>
      <div className="field-wrapper">
        <div className="field-label">* Container</div>
        <OptionField
          value={props.containerType}
          options={OPTS.CONTAINER_TYPE_OPTIONS}
          onChange={props.setContainerType}
        />
      </div>
    </div>
    <div className="field weight container-weight">
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
          <div className="field-label">* Per container</div>
          <NumberField
            value={props.weightPerPiece}
            onChange={props.setWeightPerPiece}
          />
        </div>
        <div className="field-section">
          <div className="field-label">Total</div>
          <div className="non-editable-field-value numeric">
            {props.weightTotal}
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

export default ContainerRowDisplay;
