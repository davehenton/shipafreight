describe('Home', function() {
  let b;
  beforeEach(() => {
    b = browser;
    b.url('http://localhost:3000');
  });
  it('should have a page title of ShipA Next', function() {
    expect(b.getTitle()).toBe('ShipA Next');
  });
});
