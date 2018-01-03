import PlaceFieldConnect, * as PFC from './PlaceFieldConnect';

describe('PlaceFieldConnect.js', () => {
  describe('getLocale Function', () => {
    it('gets the locale from i18n', () => {
      expect(PFC.getLocale({ i18n: { locale: 'a' } })).toBe('a');
    });
  });
  describe('getGoogleMapURL Function', () => {
    it('builds the URL with the API_KEY and locale', () => {
      expect(PFC.getGoogleMapURL({ i18n: { locale: 'a' } })).toBe(
        'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCcQFaLHUxSRI0uDJQN6eJn7yb0aoZAjEc&language=a'
      );
    });
  });
  describe('getOnSearchTextChanged Function', () => {
    it('returns a function that extracts e.target.value and passes it to the passed function', () => {
      const fn = jest.fn();
      const e = { target: { value: 'a' } };
      PFC.getOnSearchTextChanged(fn)(e);
      expect(fn).toHaveBeenLastCalledWith('a');
    });
  });
  describe('mapStateToProps Function', () => {
    it('maps state to props', () => {
      expect(
        PFC.mapStateToProps(
          { i18n: { locale: 'a' } },
          { getOnSearchTextChanged: jest.fn() }
        ).googleMapURL
      ).toBe(
        'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCcQFaLHUxSRI0uDJQN6eJn7yb0aoZAjEc&language=a'
      );
    });
  });
  describe('mapDispatchToProps Function', () => {
    it('maps dispatch to props', () => {
      expect(PFC.mapDispatchToProps()).toEqual({});
    });
  });
});
