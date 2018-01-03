import ViewQuotesConnect, * as VQC from './ViewQuotesConnect';
import * as AT from '../../state/actionTypes';

describe('ViewQuotesConnect.js', () => {
  describe('getCancelSearchIconClass Function', () => {
    it('returns hide if there is no search text and an empty string otherwise', () => {
      expect(VQC.getCancelSearchIconClass('')).toBe('hide');
      expect(VQC.getCancelSearchIconClass('a')).toBe('');
    });
  });
  describe('mapStateToProps Function', () => {
    it('returns an object', () => {
      const state = { viewQuotes: { cargoRows: [{}] } };
      expect(typeof VQC.mapStateToProps(state)).toBe('object');
    });
  });
  describe('getDispatcher Function', () => {
    it('dispatches set cargo row actions', () => {
      const dispatch = jest.fn();
      const index = 0;
      const prop = '';
      VQC.getDispatcher(dispatch, index, prop)();
      const type = dispatch.mock.calls[0][0].type;
      expect(type).toBe(AT.SET_VIEW_QUOTES_PROP);
    });
  });
  describe('mapDispatchToProps Function', () => {
    it('returns an object', () => {
      const dispatch = jest.fn();
      const ownProps = { index: 0 };
      expect(typeof VQC.mapDispatchToProps(dispatch, ownProps)).toBe('object');
    });
  });
});
