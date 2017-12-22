import React from 'react';

const Home = () => (
  <div className="home">
    <div className="instant-quote">
      <div className="instant-quote-header">
        <div className="welcome">
          Welcome to <span className="freight">Ship</span>
          <span className="agility">A</span>{' '}
          <span className="freight">Next</span>
        </div>
        <div className="title">Quote, Book, Pay and Track Freight Online</div>
        <div className="subtitle">Get instant quotes when you want them</div>
        <button>Learn More</button>
      </div>
      <div className="instant-quote-form form">
        <div className="form-title">Get a quick quote</div>
        <div className="form-section">
          <div className="form-section-title">Transport Details</div>

          <div className="form-row">
            <div className="field">
              <div className="label">Mode of transport</div>
              <div className="radio-button-group">
                <button className="radio-button">
                  <div className="radio-button-icon checked" />
                  <div className="icon ocean" />
                  <span className="label">Ocean</span>
                </button>
                <button className="radio-button">
                  <div className="radio-button-icon" />
                  <div className="icon air" />
                  <span className="label">Air</span>
                </button>
              </div>
            </div>
            <div className="field">
              <div className="label">&nbsp;</div>
              <div className="field-wrapper">
                <div className="field-label">* Movement type</div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-section">
          <div className="form-section-title">Location Details</div>
          <div className="form-row">
            <div className="field country">
              <div className="field-wrapper">
                <div className="field-label">* Origin country</div>
              </div>
            </div>
            <div className="field">
              <div className="field-wrapper">
                <div className="field-label">* Origin city</div>
              </div>
            </div>
            <div className="field country">
              <div className="field-wrapper">
                <div className="field-label">* Destination country</div>
              </div>
            </div>
            <div className="field">
              <div className="field-wrapper">
                <div className="field-label">* Destination city</div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-section">
          <div className="form-section-title">Cargo Details</div>
          <div className="form-row">
            <div className="field package-type">
              <div className="field-wrapper">
                <div className="field-label">* Package type</div>
              </div>
            </div>
            <div className="field quantity">
              <div className="field-wrapper">
                <div className="field-label">* Qty</div>
              </div>
            </div>
            <div className="field dimensions">
              <div className="field-wrapper">
                <div className="field-section">
                  <div className="field-label">* Unit</div>
                </div>
                <div className="field-section">
                  <div className="field-label">Length</div>
                </div>
                <div className="field-section">
                  <div className="field-label">Width</div>
                </div>
                <div className="field-section">
                  <div className="field-label">Height</div>
                </div>
              </div>
            </div>
            <div className="field volume">
              <div className="field-wrapper">
                <div className="field-label">* CBM</div>
              </div>
            </div>
            <div className="field weight">
              <div className="field-wrapper">
                <div className="field-section">
                  <div className="field-label">* Unit</div>
                </div>
                <div className="field-section">
                  <div className="field-label">Per piece</div>
                </div>
                <div className="field-section">
                  <div className="field-label">* Total</div>
                </div>
              </div>
            </div>
            <button className="add-row">
              <div className="icon" />
            </button>
          </div>
          <div className="form-row">
            <div className="field total">
              <div className="label">Total</div>
              <div className="field-wrapper">
                <div className="field-label">Weight in kgs</div>
              </div>
            </div>
            <div className="field revenue-ton">
              <div className="label">Revenue Tons</div>
              <div className="field-wrapper">
                <div className="field-label">Weight in tons</div>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="field description">
              <div className="field-wrapper">
                <div className="field-label">* Cargo description</div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-section">
          <div className="form-section-title">
            Additional Details (optional)
          </div>
          <div className="form-row">
            <div className="field">
              <div className="field-wrapper">
                <div className="field-label">Preferred currency</div>
              </div>
            </div>
            <button className="checkbox">
              <div className="checkbox-icon" />
              <span className="label">Hazardous material</span>
            </button>
            <button className="checkbox">
              <div className="checkbox-icon" />
              <span className="label">Household goods</span>
            </button>
            <button className="checkbox">
              <div className="checkbox-icon" />
              <span className="label">Insurance required</span>
            </button>
          </div>
        </div>
        <button className="form-button">Get Instant Quote</button>
      </div>
    </div>
    <footer className="footer">
      <div className="footer-menu">
        <div className="footer-menu-list">
          <div className="list-title">Quote</div>
          <div className="list-item">Get a Quote</div>
          <div className="list-item">View Quotes</div>
          <div className="list-item">Quote Tour</div>
        </div>
        <div className="footer-menu-list">
          <div className="list-title">Book</div>
          <div className="list-item">Book Shipment</div>
          <div className="list-item">View Bookings</div>
        </div>
        <div className="footer-menu-list">
          <div className="list-title">Track</div>
          <div className="list-item">Track Shipments</div>
        </div>
        <div className="footer-menu-list">
          <div className="list-title">Support</div>
          <div className="list-item">Quick Guide</div>
          <div className="list-item">Document List</div>
          <div className="list-item">
            CO<sub>2</sub> Facts
          </div>
        </div>
        <div className="footer-menu-list">
          <div className="list-title">Videos</div>
          <div className="list-item">How To Register</div>
          <div className="list-item">Request a Quote</div>
          <div className="list-item">Book a Shipment</div>
          <div className="list-item">Arrange Payment</div>
          <div className="list-item">Track a Shipment</div>
        </div>
        <div className="footer-menu-list">
          <div className="list-title">Download Our App</div>
          <div className="list-item">
            <div className="icon-android-app" />
            <div className="icon-ios-app" />
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="copy-links">
          <div className="copy-link">© 2017 Agility</div>
          <div className="copy-link">Privacy Policy</div>
          <div className="copy-link">Terms &amp; Conditions</div>
          <div className="copy-link">
            For more information, visit us at www.agility.com
          </div>
        </div>
        <div className="social-links">
          <a
            href="http://www.youtube.com/user/agilitycorp"
            className="youtube"
            target="_blank"
          >
            <i className="icon-youtube" />
          </a>
          <a
            href="http://www.twitter.com/agility"
            className="twitter"
            target="_blank"
          >
            <i className="icon-twitter" />
          </a>
          <a
            href="http://www.linkedin.com/company/agility"
            className="linkedin"
            target="_blank"
          >
            <i className="icon-linkedin" />
          </a>
        </div>
      </div>
    </footer>
  </div>
);

export default Home;
