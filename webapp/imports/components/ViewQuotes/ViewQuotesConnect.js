import { connect } from 'react-redux';

import { setViewQuotesProp } from '../../state/actionCreators';
import ViewQuotesDisplay from './ViewQuotesDisplay';

export const getCancelSearchIconClass = searchText =>
  searchText === '' ? 'hide' : '';

export const mapStateToProps = ({ viewQuotes: { searchText, activeTab } }) => ({
  searchText,
  cancelSearchIconClass: getCancelSearchIconClass(searchText),
  activeTab,
});

export const getDispatcher = (dispatch, prop) => val =>
  dispatch(setViewQuotesProp(prop, val));

export const mapDispatchToProps = dispatch => ({
  setSearchText: getDispatcher(dispatch, 'searchText'),
  setActiveTab: getDispatcher(dispatch, 'activeTab'),
});

const ViewQuotesConnect = connect(mapStateToProps, mapDispatchToProps)(
  ViewQuotesDisplay
);

export default ViewQuotesConnect;
