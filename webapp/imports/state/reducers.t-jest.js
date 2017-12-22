import * as reducers from './reducers';
import * as AT from './actionTypes';

describe('reducers.js', () => {
  describe('quoteForm', () => {
    it('sets props', () => {
      const state = { a: 'b' };
      const action = {
        type: AT.SET_QUOTE_FORM_PROP,
        prop: 'a',
        value: 'c',
      };
      expect(reducers.quoteForm(state, action).a).toBe('c');
    });
    it('does nothing by default', () => {
      const state = { a: 'b' };
      const action = {
        type: 'INVALID',
        prop: 'a',
        value: 'c',
      };
      expect(reducers.quoteForm(state, action)).toBe(state);
    });
    it('handles missing parameters', () => {
      expect(reducers.quoteForm).not.toThrow();
    });
  });
});
