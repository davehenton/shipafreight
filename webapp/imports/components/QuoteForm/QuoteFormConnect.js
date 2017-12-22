import { connect } from 'react-redux';

import { setQuoteFormProp } from '../../state/actionCreators';
import QuoteFormDisplay from './QuoteFormDisplay';

export const maybe = (thing, fallback) => thing || fallback || '';

export const mapStateToProps = ({ quoteForm }) => {
  const props = {
    modeOfTransport: maybe(quoteForm.modeOfTransport, 'Ocean'),
    movementType: maybe(quoteForm.movementType, 'Door to Door'),
  };
  props.oceanButtonClass = props.modeOfTransport === 'Ocean' ? 'active' : '';
  props.airButtonClass = props.modeOfTransport === 'Air' ? 'active' : '';
  return props;
};

export const mapDispatchToProps = dispatch => {
  const dis = prop => val => dispatch(setQuoteFormProp(prop, val));
  return {
    setModeToOcean: () =>
      dispatch(setQuoteFormProp('modeOfTransport', 'Ocean')),
    setModeToAir: () => dispatch(setQuoteFormProp('modeOfTransport', 'Air')),
    setMovementType: dis('movementType'),
  };
};

const QuoteFormConnect = connect(mapStateToProps, mapDispatchToProps)(
  QuoteFormDisplay
);

export default QuoteFormConnect;
