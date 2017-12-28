import React from 'react';

const NumberField = props => (
  <input
    className="input numeric"
    type="number"
    disabled={props.disabled}
    value={props.value}
    onChange={e => {
      props.onChange(e.target.value === '' ? '' : +e.target.value);
    }}
  />
);

export default NumberField;
