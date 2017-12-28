// HazardousModalConnect.js
// Smart component that connects the state and dispatchers for the hazardous
// modal that appears when the Hazardous Material checkbox is clicked on the
// quote form. The only things you can do here are select a class, save, and
// cancel.

import { connect } from 'react-redux';

import { setQuoteFormProp } from '../../state/actionCreators';
import HazardousModalDisplay from './HazardousModalDisplay';

// Sets the CSS class to active if the selectedClass matches that of the button
// (or preview window), and to inactive otherwise
export const getActiveClass = selectedClass => buttonClass =>
  selectedClass === buttonClass ? 'active' : 'inactive';

// Extract the showHazardousModal and hazardousClass properties
export const mapStateToProps = ({
  quoteForm: { showHazardousModal, hazardousClass },
}) => ({
  showHazardousModal,
  hazardousClass,
  getActiveClass: getActiveClass(hazardousClass),
});

// Sets the hazardous class. The extra function is so that the radio buttons
// can be declared with their values ahead of time - there is no dynamic value
// generated on input like with an input field or select field.
export const getSetHazardousClass = dispatch => val => () =>
  dispatch(setQuoteFormProp('hazardousClass', val));

// Since the hazardousClass property will have already been set, all we need to
// do is close the modal upon clicking save.
export const getSave = dispatch => () =>
  dispatch(setQuoteFormProp('showHazardousModal', false));

// Since the hazardousClass property may have been set, we need to reset it, set
// isHazardous to false (unchecking the checkbox on the quote form), and close
// the modal.
export const getCancel = dispatch => () => {
  dispatch(setQuoteFormProp('isHazardous', false));
  dispatch(setQuoteFormProp('hazardousClass', ''));
  dispatch(setQuoteFormProp('showHazardousModal', false));
};

// Map dispatchers for the presentational component
export const mapDispatchToProps = dispatch => ({
  setHazardousClass: getSetHazardousClass(dispatch),
  save: getSave(dispatch),
  cancel: getCancel(dispatch),
});

const HazardousModalConnect = connect(mapStateToProps, mapDispatchToProps)(
  HazardousModalDisplay
);

export default HazardousModalConnect;
