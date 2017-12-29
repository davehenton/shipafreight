describe('Quote Form Defaults', function() {
  let b;
  beforeAll(() => {
    b = browser;
    b.url('http://localhost:3000');
    b.waitForExist('.form', 5000);
  });
  it('should have a page title of ShipA Next', function() {
    expect(b.getTitle()).toBe('ShipA Next');
  });
  describe('default values', () => {
    it('defaults mode of transport to Ocean', () => {
      const oceanButton = b.element('#ocean-button');
      expect(/active/.test(oceanButton.getAttribute('class'))).toBe(true);
    });
    it('defaults movement type to Door to Door', () => {
      const movementType = b.element('.movement-type .Select-value-label span');
      expect(movementType.getText()).toBe('Door to Door');
    });
    it('defaults a single package row', () => {
      const cargoRows = b.elements('.package-row');
      expect(cargoRows.value.length).toBe(1);
    });
    it('defaults package type to Packages', () => {
      const packageType = b.element('.package-type .Select-value-label span');
      expect(packageType.getText()).toBe('Packages');
    });
    it('defaults quantity to 1', () => {
      const quantity = b.element('.quantity input');
      expect(quantity.getValue()).toBe('1');
    });
    it('defaults to using dimensions', () => {
      const dimensionsCheckbox = b.element('.dimensions .checkbox');
      expect(/active/.test(dimensionsCheckbox.getAttribute('class'))).toBe(
        true
      );
    });
    it('defaults dimensions UOM to cm', () => {
      const dimensionsUOM = b.element(
        '.dimensions-uom .Select-value-label span'
      );
      expect(dimensionsUOM.getText()).toBe('cm');
    });
    it('defaults length to blank', () => {
      const length = b.element('.length input');
      expect(length.getValue()).toBe('');
    });
    it('defaults width to blank', () => {
      const width = b.element('.width input');
      expect(width.getValue()).toBe('');
    });
    it('defaults height to blank', () => {
      const height = b.element('.height input');
      expect(height.getValue()).toBe('');
    });
    it('defaults volume to 0', () => {
      const volume = b.element('.volume input');
      expect(volume.getValue()).toBe('0');
    });
    it('defaults weight UOM to kg', () => {
      const weightUOM = b.element('.weight-uom .Select-value-label span');
      expect(weightUOM.getText()).toBe('kg');
    });
    it('defaults weight total to 0', () => {
      const weightTotal = b.element('.weight-total .non-editable-field-value');
      expect(weightTotal.getText()).toBe('0');
    });
    it('defaults weight in kg to 0', () => {
      const weightInUOM = b.element('.weight-in-kg .non-editable-field-value');
      expect(weightInUOM.getText()).toBe('0');
    });
    it('defaults volume in CBM to 0', () => {
      const volumeInCBM = b.element('.volume-in-cbm .non-editable-field-value');
      expect(volumeInCBM.getText()).toBe('0');
    });
    it('defaults revenue tons to 0', () => {
      const revenueTons = b.element('.revenue-tons .non-editable-field-value');
      expect(revenueTons.getText()).toBe('0');
    });
    it('defaults hazardous material to false', () => {
      const hazardousMaterial = b.element('.hazardous-material.checkbox');
      expect(/active/.test(hazardousMaterial.getAttribute('class'))).toBe(
        false
      );
    });
    it('defaults household goods to false', () => {
      const householdGoods = b.element('.household-goods.checkbox');
      expect(/active/.test(householdGoods.getAttribute('class'))).toBe(false);
    });
    it('defaults preferred currency to USD', () => {
      const preferredCurrency = b.element(
        '.preferred-currency .Select-value-label span'
      );
      expect(preferredCurrency.getText()).toBe('USD - US Dollar');
    });
    it('defaults insurance required to false', () => {
      const insuranceRequired = b.element('.insurance-required.checkbox');
      expect(/active/.test(insuranceRequired.getAttribute('class'))).toBe(
        false
      );
    });
  });
});
