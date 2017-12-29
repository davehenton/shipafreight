// TODO: Test additional details section
// Select preferred currency
// Active class added to insurance required on click
// Display cargo value and cargo value currency when checked
// Hide cargo value and cargo value currency when unchecked
import browser from 'chimp/jest/browser';

describe('Quote Form Additional Details', function() {
  let b;
  beforeEach(async function() {
    b = browser;
    await b.url('http://localhost:3000');
  });
  it('toggles the active class when insurance required is clicked', async function() {
    let classes = await b.getAttribute('.insurance-required', 'class');
    expect(/active/.test(classes)).toBe(false);

    await b.click('.insurance-required');
    classes = await b.getAttribute('.insurance-required', 'class');
    expect(/active/.test(classes)).toBe(true);

    await b.click('.insurance-required');
    classes = await b.getAttribute('.insurance-required', 'class');
    expect(/active/.test(classes)).toBe(false);
  });
  it('brings cargo value and cargo value currency when insurance required is checked', async function() {
    let classes = await b.getAttribute('.cargo-value', 'class');
    expect(/hide/.test(classes)).toBe(true);
    expect(/show/.test(classes)).toBe(false);
    classes = await b.getAttribute('.cargo-value-currency', 'class');
    expect(/hide/.test(classes)).toBe(true);
    expect(/show/.test(classes)).toBe(false);

    await b.click('.insurance-required');
    classes = await b.getAttribute('.cargo-value', 'class');
    expect(/hide/.test(classes)).toBe(false);
    expect(/show/.test(classes)).toBe(true);
    classes = await b.getAttribute('.cargo-value-currency', 'class');
    expect(/hide/.test(classes)).toBe(false);
    expect(/show/.test(classes)).toBe(true);

    await b.click('.insurance-required');
    classes = await b.getAttribute('.cargo-value', 'class');
    expect(/hide/.test(classes)).toBe(true);
    expect(/show/.test(classes)).toBe(false);
    classes = await b.getAttribute('.cargo-value-currency', 'class');
    expect(/hide/.test(classes)).toBe(true);
    expect(/show/.test(classes)).toBe(false);
  });
  it('cargo value currency shows USD by default', async function() {
    await b.click('.insurance-required');
    const text = await b.getText(
      '.cargo-value-currency .Select-value-label span'
    );
    expect(text).toBe('USD - US Dollar');
  });
  it('cargo value currency shows various currencies when clicked', async function() {
    await b.click('.insurance-required');
    expect(await b.isExisting('.cargo-value-currency .Select-menu-outer')).toBe(
      false
    );

    await b.click('.cargo-value-currency .Select');
    expect(await b.isExisting('.cargo-value-currency .Select-menu-outer')).toBe(
      true
    );

    await b.click('.cargo-value-currency .Select-option');
    expect(await b.isExisting('.cargo-value-currency .Select-menu-outer')).toBe(
      false
    );

    const text = await b.getText(
      '.cargo-value-currency .Select-value-label span'
    );
    expect(text).not.toBe('USD - US Dollar');
  });
});
