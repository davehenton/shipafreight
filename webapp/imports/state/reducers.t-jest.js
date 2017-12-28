import * as reducers from './reducers';
import * as AT from './actionTypes';

describe('reducers.js', () => {
  describe('getIsContainerCargo Function', () => {
    it('checks the packageType of the first cargo row', () => {
      expect(
        reducers.getIsContainerCargo({
          cargoRows: [{ packageType: 'CONTAINERS' }],
        })
      ).toBe(true);
      expect(
        reducers.getIsContainerCargo({
          cargoRows: [{ packageType: 'NOT_CONTAINERS' }],
        })
      ).toBe(false);
    });
  });
  describe('getVolume Function', () => {
    it('adds up and converts the volume', () => {
      const props = {
        quantity: 1,
        length: 100,
        width: 100,
        height: 100,
        dimensionsUOM: 'CM',
      };
      expect(reducers.getVolume(props)).toBe(1);
    });
    it('ignores the row if quantity or dimensions are missing', () => {
      const props = {
        length: 100,
        width: 100,
        height: 100,
        dimensionsUOM: 'CM',
      };
      expect(reducers.getVolume(props)).toBe(0);
      props.quantity = 1;
      props.length = null;
      expect(reducers.getVolume(props)).toBe(0);
      props.length = 1;
      props.width = null;
      expect(reducers.getVolume(props)).toBe(0);
      props.width = 1;
      props.height = null;
      expect(reducers.getVolume(props)).toBe(0);
    });
  });
  describe('getWeightTotal Function', () => {
    it('multiplies the quantity by the weight per piece', () => {
      let props = { quantity: 1, weightPerPiece: 2 };
      expect(reducers.getWeightTotal(props)).toBe(2);
      props = { quantity: 2, weightPerPiece: 2 };
      expect(reducers.getWeightTotal(props)).toBe(4);
      props = { quantity: 10, weightPerPiece: 0.1 };
      expect(reducers.getWeightTotal(props)).toBe(1);
      props = { weightPerPiece: 2 };
      expect(reducers.getWeightTotal(props)).toBe(0);
      props = { quantity: 1 };
      expect(reducers.getWeightTotal(props)).toBe(0);
    });
  });
  describe('getWeightInKG Function', () => {
    it('adds up the weights and converts all to KG', () => {
      let props = {
        cargoRows: [
          { quantity: 1, weightUOM: 'KG', weightPerPiece: 1 }, // 1
          { quantity: 2, weightUOM: 'KG', weightPerPiece: 1 }, // 2
          { quantity: 0, weightUOM: 'KG', weightPerPiece: 1 }, // 0
          { quantity: 1, weightUOM: 'KG', weightPerPiece: 0 }, // 0
        ],
      };
      expect(reducers.getWeightInKG(props)).toBe(3);
    });
  });
  describe('getVolumeInCBM Function', () => {
    it('adds the volume', () => {
      let props = {
        cargoRows: [
          { volume: 1 }, // 1
          { volume: 2 }, // 2
          { volume: 0 }, // 0
          {}, // 0
        ],
      };
      expect(reducers.getVolumeInCBM(props)).toBe(3);
    });
  });
  describe('getRevenueTons Function', () => {
    it('returns the max of weight in tons and volume in CBM', () => {
      let props = { weightInKG: 2000, volumeInCBM: 1 };
      expect(reducers.getRevenueTons(props)).toBe(2);
      props = { weightInKG: 1000, volumeInCBM: 2 };
      expect(reducers.getRevenueTons(props)).toBe(2);
    });
  });
  describe('getVolumetricWeightInKG', () => {
    it('multiplies the volume by 1000 and divides by 6', () => {
      let props = { volumeInCBM: 1 };
      expect(reducers.getVolumetricWeightInKG(props)).toBe(166.66666666666666);
    });
  });
  describe('getChargeableWeightInKG Function', () => {
    it('takes the max of weightInKG and volmetricWeightInKG', () => {
      let props = { weightInKG: 1000, volumetricWeightInKG: 2000 };
      expect(reducers.getChargeableWeightInKG(props)).toBe(2000);
      props = { weightInKG: 2000, volumetricWeightInKG: 1000 };
      expect(reducers.getChargeableWeightInKG(props)).toBe(2000);
    });
  });
  describe('getTotals Function', () => {
    it('returns the object along with all the totals', () => {
      const withTotals = reducers.getTotals({ cargoRows: [{}] });
      expect(withTotals.cargoRows).toEqual([{}]);
      expect(withTotals.weightInKG).toBe(0);
      expect(withTotals.volumeInCBM).toBe(0);
      expect(withTotals.revenueTons).toBe(0);
      expect(withTotals.volumetricWeightInKG).toBe(0);
      expect(withTotals.chargeableWeightInKG).toBe(0);
    });
  });
  describe('getCargoRow Function', () => {
    it('updates the cargoRow prop', () => {
      const state = { cargoRows: [{ prop: 'val' }] };
      const action = { prop: 'prop', value: 'newval', index: 0 };
      expect(reducers.getCargoRow(state, action).cargoRows[0].prop).toBe(
        'newval'
      );
    });
    it('sets the volume if using dims', () => {
      const state = { cargoRows: [{ prop: 'val', isUsingDims: true }] };
      const action = { prop: 'prop', value: 'newval', index: 0 };
      expect(reducers.getCargoRow(state, action).cargoRows[0].volume).toBe(0);
      state.cargoRows[0].isUsingDims = false;
      expect(reducers.getCargoRow(state, action).cargoRows[0].length).toBe('');
    });
  });
  describe('setIsContainerCargo Function', () => {
    it('sets the default row depending on if container or package', () => {
      const state = {};
      const action = { isContainerCargo: true };
      expect(reducers.setIsContainerCargo(state, action).cargoRows).toEqual([
        reducers.CONTAINER_ROW_DEFAULT_STATE,
      ]);
      action.isContainerCargo = false;
      expect(reducers.setIsContainerCargo(state, action).cargoRows).toEqual([
        reducers.PACKAGE_ROW_DEFAULT_STATE,
      ]);
    });
  });
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
    it('adds cargo rows', () => {
      const state = { cargoRows: [], isContainerCargo: true };
      const action = { type: AT.ADD_QUOTE_FORM_CARGO_ROW };
      expect(reducers.quoteForm(state, action).cargoRows).toEqual([
        reducers.CONTAINER_ROW_DEFAULT_STATE,
      ]);
      state.isContainerCargo = false;
      expect(reducers.quoteForm(state, action).cargoRows).toEqual([
        reducers.PACKAGE_ROW_DEFAULT_STATE,
      ]);
    });
    it('removes cargo rows', () => {
      const state = { cargoRows: [{}] };
      const action = { type: AT.REMOVE_QUOTE_FORM_CARGO_ROW, index: 0 };
      expect(reducers.quoteForm(state, action).cargoRows).toEqual([]);
    });
    it('sets cargo row props', () => {
      const state = { cargoRows: [{ prop: 'value ' }] };
      const action = {
        type: AT.SET_QUOTE_FORM_CARGO_ROW_PROP,
        prop: 'prop',
        value: 'newvalue',
        index: 0,
      };
      expect(reducers.quoteForm(state, action).cargoRows[0].prop).toEqual(
        'newvalue'
      );
    });
    it('sets isContainerCargo', () => {
      const state = { cargoRows: [{ prop: 'value ' }], isContainerCargo: true };
      const action = {
        type: AT.SET_QUOTE_FORM_IS_CONTAINER_CARGO,
        isContainerCargo: false,
      };
      expect(reducers.quoteForm(state, action).isContainerCargo).toBe(false);
    });
  });
});
