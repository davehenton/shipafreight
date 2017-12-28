import { connect } from 'react-redux';

import { setQuoteFormProp } from '../../state/actionCreators';
import HouseholdGoodsModalDisplay from './HouseholdGoodsModalDisplay';

export const mapStateToProps = ({ quoteForm: { isHouseholdGoods } }) => ({
  isHouseholdGoods,
});

export const getOk = dispatch => () =>
  dispatch(setQuoteFormProp('isHouseholdGoods', false));

export const mapDispatchToProps = dispatch => ({ ok: getOk(dispatch) });

const HouseholdGoodsModalConnect = connect(mapStateToProps, mapDispatchToProps)(
  HouseholdGoodsModalDisplay
);

export default HouseholdGoodsModalConnect;
