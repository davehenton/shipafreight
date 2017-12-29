describe('Home', function() {
  let b;
  beforeAll(() => {
    b = browser;
    b.url('http://localhost:3000');
  });
  it('should have a page title of ShipA Next', function() {
    expect(b.getTitle()).toBe('ShipA Next');
  });
  describe('default values', () => {
    it('defaults mode of transport to Ocean', () => {
      const oceanButton = browser.element('#ocean-button');
      expect(/active/.test(oceanButton.getAttribute('class'))).toBe(true);
    });
    it('defaults movement type to Door to Door', () => {
      const movementType = browser.element(
        '.movement-type .Select-value-label span'
      );
      expect(movementType.getText()).toBe('Door to Door');
    });
    it('defaults a single package row', () => {
      const cargoRows = browser.elements('.package-row');
      expect(cargoRows.value.length).toBe(1);
    });
    it('defaults Packages as the package type', () => {
      const packageType = browser.element(
        '.package-type .Select-value-label span'
      );
      expect(packageType.getText()).toBe('Packages');
    });
  });
});
