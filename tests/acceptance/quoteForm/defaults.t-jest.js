import browser from 'chimp/jest/browser';

describe('Quote Form Defaults', function() {
  let b;
  beforeAll(async function() {
    b = browser;
    await b.url('http://localhost:3000');
  });
  it('should be ShipA Next', async function() {
    await b.url('http://localhost:3000');
    const title = await b.getTitle();
    expect(title).toBe('ShipA Next');
  });
  it('defaults mode of transport to Ocean', async function() {
    const classes = await b.getAttribute('#ocean-button', 'class');
    expect(/active/.test(classes)).toBe(true);
  });
  it('defaults movement type to Door to Door', async function() {
    const text = await b.getText('.movement-type .Select-value-label span');
    expect(text).toBe('Door to Door');
  });
  it('defaults a single package row', async function() {
    const cargoRows = await b.elements('.package-row');
    expect(cargoRows.value.length).toBe(1);
  });
  it('defaults package type to Packages', async function() {
    const text = await b.getText('.package-type .Select-value-label span');
    expect(text).toBe('Packages');
  });
  it('defaults quantity to 1', async function() {
    const value = await b.getValue('.quantity input');
    expect(value).toBe('1');
  });
  it('defaults to using dimensions', async function() {
    const classes = await b.getAttribute('.dimensions .checkbox', 'class');
    expect(/active/.test(classes)).toBe(true);
  });
  it('defaults dimensions UOM to cm', async function() {
    const text = await b.getText('.dimensions-uom .Select-value-label span');
    expect(text).toBe('cm');
  });
  it('defaults length to blank', async function() {
    const value = await b.getValue('.length input');
    expect(value).toBe('');
  });
  it('defaults width to blank', async function() {
    const value = await b.getValue('.width input');
    expect(value).toBe('');
  });
  it('defaults height to blank', async function() {
    const value = await b.getValue('.height input');
    expect(value).toBe('');
  });
  it('defaults volume to 0', async function() {
    const value = await b.getValue('.volume input');
    expect(value).toBe('0');
  });
  it('defaults weight UOM to kg', async function() {
    const text = await b.getText('.weight-uom .Select-value-label span');
    expect(text).toBe('kg');
  });
  it('defaults weight total to 0', async function() {
    const text = await b.getText('.weight-total .non-editable-field-value');
    expect(text).toBe('0');
  });
  it('defaults weight in kg to 0', async function() {
    const text = await b.getText('.weight-in-kg .non-editable-field-value');
    expect(text).toBe('0');
  });
  it('defaults volume in CBM to 0', async function() {
    const text = await b.getText('.volume-in-cbm .non-editable-field-value');
    expect(text).toBe('0');
  });
  it('defaults revenue tons to 0', async function() {
    const text = await b.getText('.revenue-tons .non-editable-field-value');
    expect(text).toBe('0');
  });
  it('defaults hazardous material to false', async function() {
    const classes = await b.getAttribute(
      '.hazardous-material.checkbox',
      'class'
    );
    expect(/active/.test(classes)).toBe(false);
  });
  it('defaults household goods to false', async function() {
    const classes = await b.getAttribute('.household-goods.checkbox', 'class');
    expect(/active/.test(classes)).toBe(false);
  });
  it('defaults preferred currency to USD', async function() {
    const text = await b.getText(
      '.preferred-currency .Select-value-label span'
    );
    expect(text).toBe('USD - US Dollar');
  });
  it('defaults insurance required to false', async function() {
    const classes = await b.getAttribute(
      '.insurance-required.checkbox',
      'class'
    );
    expect(/active/.test(classes)).toBe(false);
  });
});
