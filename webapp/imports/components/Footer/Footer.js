import React from 'react';

const Footer = props => (
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
);

export default Footer;
