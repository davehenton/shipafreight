import React from 'react';

const HazardousModalDisplay = props => (
  <div className="hazardous-modal modal">
    <div className="modal-form">
      <div className="modal-header">
        <div className="title">Select Hazardous Goods Class</div>
      </div>
      <div className="modal-body">
        <div className="radio-button-list">
          <button
            className={`radio-button ${props.getActiveClass('EXPLOSIVES')}`}
            onClick={props.setHazardousClass('EXPLOSIVES')}
          >
            <div className="radio-button-icon" />Explosives
          </button>
          <button
            className={`radio-button ${props.getActiveClass('GASES')}`}
            onClick={props.setHazardousClass('GASES')}
          >
            <div className="radio-button-icon" />Gases
          </button>
          <button
            className={`radio-button ${props.getActiveClass(
              'FLAMMABLE_LIQUIDS'
            )}`}
            onClick={props.setHazardousClass('FLAMMABLE_LIQUIDS')}
          >
            <div className="radio-button-icon" />Flammable Liquids
          </button>
          <button
            className={`radio-button ${props.getActiveClass(
              'FLAMMABLE_SOLIDS'
            )}`}
            onClick={props.setHazardousClass('FLAMMABLE_SOLIDS')}
          >
            <div className="radio-button-icon" />Flammable Solids
          </button>
          <button
            className={`radio-button ${props.getActiveClass(
              'OXIDIZING_SUBSTANCES'
            )}`}
            onClick={props.setHazardousClass('OXIDIZING_SUBSTANCES')}
          >
            <div className="radio-button-icon" />Oxidizing Substances
          </button>
          <button
            className={`radio-button ${props.getActiveClass(
              'TOXIC_AND_INFECTIOUS_SUBSTANCES'
            )}`}
            onClick={props.setHazardousClass('TOXIC_AND_INFECTIOUS_SUBSTANCES')}
          >
            <div className="radio-button-icon" />Toxic and Infectious Subtances
          </button>
          <button
            className={`radio-button ${props.getActiveClass(
              'RADIOACTIVE_MATERIAL'
            )}`}
            onClick={props.setHazardousClass('RADIOACTIVE_MATERIAL')}
          >
            <div className="radio-button-icon" />Radioactive Material
          </button>
          <button
            className={`radio-button ${props.getActiveClass('CORROSIVES')}`}
            onClick={props.setHazardousClass('CORROSIVES')}
          >
            <div className="radio-button-icon" />Corrosives
          </button>
          <button
            className={`radio-button ${props.getActiveClass('OTHERS')}`}
            onClick={props.setHazardousClass('OTHERS')}
          >
            <div className="radio-button-icon" />Others
          </button>
        </div>
        <div className="preview">
          <div className={props.getActiveClass('EXPLOSIVES')}>
            <div className="title">Class 1 - Explosives</div>
            <div className="subtitle">Subdivisions</div>
            <p>
              1.1: Substances and articles which have a mass explosion hazardous
            </p>
            <p>
              1.2: Substances and articles which have a projection hazard but
              not a mass explosion hazard
            </p>
            <p>
              1.3: Substances and articles which have a fire hazard and either a
              minor blast hazard or minor projection hazard or both
            </p>
            <p>
              1.4: Substances and articles which present no significant hazard;
              only a small hazard in the event of ignition or initiation during
              transport with any effects largely confined to the package
            </p>
            <p>
              1.5: Very insensitive substances which have a mass explosion
              hazard
            </p>
            <p>
              1.6: Extremely insensitive articles which do not have a mass
              explosion hazard
            </p>
          </div>
          <div className={props.getActiveClass('GASES')}>
            <div className="title">Class 2 - Gases</div>
            <div className="subtitle">Subdivisions</div>
            <p>2.1: Flammable gases</p>
            <p>2.2: Non-flammable, non-toxic gases</p>
            <p>2.3: Toxic gases</p>
          </div>
          <div className={props.getActiveClass('FLAMMABLE_LIQUIDS')}>
            <div className="title">Class 3 - Flammable Liquids</div>
          </div>
          <div className={props.getActiveClass('FLAMMABLE_SOLIDS')}>
            <div className="title">Class 4 - Flammable Solids</div>
            <div className="subtitle">Subdivisions</div>
            <p>4.1: Flammable solids</p>
            <p>4.2: Substances liable to spontaneous combustion</p>
            <p>
              4.3: Substance which, in contact with water, emit flammable gases
            </p>
          </div>
          <div className={props.getActiveClass('OXIDIZING_SUBSTANCES')}>
            <div className="title">Class 5 - Oxidizing Substances</div>
            <div className="subtitle">Subdivisions</div>
            <p>5.1: Oxidizing substances</p>
            <p>5.2: Organic peroxides</p>
          </div>
          <div
            className={props.getActiveClass('TOXIC_AND_INFECTIOUS_SUBSTANCES')}
          >
            <div className="title">
              Class 6 - Toxic Substances; Infectious Substances
            </div>
            <div className="subtitle">Subdivisions</div>
            <p>6.1: Toxic substances</p>
            <p>6.2: Infectious substances</p>
          </div>
          <div className={props.getActiveClass('RADIOACTIVE_MATERIAL')}>
            <div className="title">Class 7 - Radioactive Material</div>
          </div>
          <div className={props.getActiveClass('CORROSIVES')}>
            <div className="title">Class 8 - Corrosives</div>
          </div>
          <div className={props.getActiveClass('OTHERS')}>
            <div className="title">Class 9 - Miscellaneous Dangerous Goods</div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button onClick={props.save}>Select</button>
        <button className="secondary" onClick={props.cancel}>
          Cancel
        </button>
      </div>
    </div>
  </div>
);

export default HazardousModalDisplay;
