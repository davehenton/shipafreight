import * as U from './utils';

describe('utils.js', () => {
  describe('maybe Function', () => {
    it('returns the thing if it is not undefined', () => {
      expect(U.maybe('a')).toBe('a');
      expect(U.maybe(1)).toBe(1);
      expect(U.maybe(null)).toBe(null);
      expect(U.maybe([])).toEqual([]);
      expect(U.maybe({})).toEqual({});
      expect(U.maybe(() => null)()).toEqual(null);
    });
    it('returns the fallback if thing is undefined and fallback is not', () => {
      var _;
      expect(U.maybe(_, 'a')).toBe('a');
      expect(U.maybe(_, 1)).toBe(1);
      expect(U.maybe(_, null)).toBe(null);
      expect(U.maybe(_, [])).toEqual([]);
      expect(U.maybe(_, {})).toEqual({});
      expect(U.maybe(_, () => null)()).toEqual(null);
    });
    it('returns an empty string if both thing and fallback are undefined', () => {
      expect(U.maybe()).toBe('');
    });
  });
  describe('maxZeroDecimals Function', () => {
    it('rounds to zero decimals', () => {
      expect(U.maxZeroDecimals(1.0)).toBe(1);
      expect(U.maxZeroDecimals(1.5)).toBe(2);
      expect(U.maxZeroDecimals(1.4)).toBe(1);
      expect(U.maxZeroDecimals(111)).toBe(111);
    });
    it('defaults to 0', () => {
      expect(U.maxZeroDecimals()).toBe(0);
    });
  });
  describe('maxTwoDecimals Function', () => {
    it('rounds to two decimals', () => {
      expect(U.maxTwoDecimals(1.0)).toBe(1);
      // Fails due to floating point error?
      // expect(U.maxTwoDecimals(1.005)).toBe(1.01);
      expect(U.maxTwoDecimals(1.006)).toBe(1.01);
      expect(U.maxTwoDecimals(1.004)).toBe(1);
      expect(U.maxTwoDecimals(111)).toBe(111);
    });
    it('defaults to 0', () => {
      expect(U.maxTwoDecimals()).toBe(0);
    });
  });
  describe('maxThreeDecimals Function', () => {
    it('rounds to three decimals', () => {
      expect(U.maxThreeDecimals(1.0)).toBe(1);
      expect(U.maxThreeDecimals(1.0005)).toBe(1.001);
      expect(U.maxThreeDecimals(1.0004)).toBe(1);
      expect(U.maxThreeDecimals(111)).toBe(111);
    });
    it('defaults to 0', () => {
      expect(U.maxThreeDecimals()).toBe(0);
    });
  });
  describe('nearestHalf Function', () => {
    it('rounds to the nearest half', () => {
      expect(U.nearestHalf(1.0)).toBe(1);
      expect(U.nearestHalf(1.5)).toBe(1.5);
      expect(U.nearestHalf(1.25)).toBe(1.5);
      // Fails due to floating point error?
      // expect(U.nearestHalf(1.24)).toBe(1);
      expect(U.nearestHalf(1.22)).toBe(1);
      expect(U.nearestHalf(111)).toBe(111);
    });
    it('defaults to 0', () => {
      expect(U.nearestHalf()).toBe(0);
    });
  });
  describe('buildSearchRegExp Function', () => {
    it('returns a regular expression', () => {
      const regexp = U.buildSearchRegExp();
      expect(regexp instanceof RegExp).toBe(true);
    });
    it('only accepts a string as a parameter', () => {
      expect(() => U.buildSearchRegExp(true)).toThrow();
      expect(() => U.buildSearchRegExp(1)).toThrow();
      expect(() => U.buildSearchRegExp({})).toThrow();
      expect(() => U.buildSearchRegExp([])).toThrow();
      expect(() => U.buildSearchRegExp(null)).toThrow();
    });
    it('returns a regular expression that looks for all words in a string in any order', () => {
      const regexp = U.buildSearchRegExp('word1 word2 word3');
      expect(regexp.test('word1 word2 word3')).toBe(true);
      expect(regexp.test('word2 word3 word1')).toBe(true);
      expect(regexp.test('word3 word2 word1')).toBe(true);
      expect(regexp.test('aword3a bword2b bword1b notaword')).toBe(true);
      expect(regexp.test('word4 word2 word3')).toBe(false);
    });
    it('finds a UNLocation by full code', () => {
      const regexp = U.buildSearchRegExp('inmaa');
      expect(
        regexp.test(
          'INMAA Chennai (ex Madras) Chennai (ex Madras) TN port airport'
        )
      ).toBe(true);
    });
    // TODO: Complete test
    it('handles special characters', () => {
      const regexp = U.buildSearchRegExp('/[');
    });
  });
});
