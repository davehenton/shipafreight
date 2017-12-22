import * as AC from './actionCreators';
import * as AT from './actionTypes';

describe('actionCreators.js', () => {
  describe('setQuoteFormProp Function', () => {
    it('creates the appropriate action', () => {
      const action = AC.setQuoteFormProp('prop', 'value');
      expect(action.type).toBe(AT.SET_QUOTE_FORM_PROP);
      expect(action.prop).toBe('prop');
      expect(action.value).toBe('value');
    });
  });
});
