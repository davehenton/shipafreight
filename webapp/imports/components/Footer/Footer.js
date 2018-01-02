import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => (
  <footer className="footer">
    <div className="footer-menu">
      <div className="footer-menu-list">
        <div className="list-title">Quote</div>
        <div className="list-item">
          <Link to="/">Get a Quote</Link>
        </div>
        <div className="list-item">
          <Link to="/quote">View Quotes</Link>
        </div>
        <div className="list-item">
          <Link to="/quote/tour">Quote Tour</Link>
        </div>
      </div>
      <div className="footer-menu-list">
        <div className="list-title">Book</div>
        <div className="list-item">
          <Link to="/book/new">Book Shipment</Link>
        </div>
        <div className="list-item">
          <Link to="/book">View Bookings</Link>
        </div>
      </div>
      <div className="footer-menu-list">
        <div className="list-title">Track</div>
        <div className="list-item">
          <Link to="/track">Track Shipments</Link>
        </div>
      </div>
      <div className="footer-menu-list">
        <div className="list-title">Support</div>
        <div className="list-item">
          <Link to="/quick-guide">Quick Guide</Link>
        </div>
        <div className="list-item">
          <Link to="/document-list">Document List</Link>
        </div>
        <div className="list-item">
          <Link to="co2-facts">
            CO<sub>2</sub> Facts
          </Link>
        </div>
      </div>
      <div className="footer-menu-list">
        <div className="list-title">Videos</div>
        <div className="list-item">
          <a href="https://www.youtube.com/IAJffTxPW0I">How To Register</a>
        </div>
        <div className="list-item">
          <a href="https://youtu.be/Kz4XgH7TmC8">Request a Quote</a>
        </div>
        <div className="list-item">
          <a href="https://youtu.be/QYt4m337xa0">Book a Shipment</a>
        </div>
        <div className="list-item">
          <a href="https://youtu.be/wrqfYtCvYdw">Arrange Payment</a>
        </div>
        <div className="list-item">
          <a href="https://youtu.be/8nZ3TkeF5Qw">Track a Shipment</a>
        </div>
      </div>
      <div className="footer-menu-list">
        <div className="list-title">Download Our App</div>
        <div className="list-item">
          <a href="https://play.google.com/store/apps/details?id=com.agility.shipafreight&hl=en">
            <div className="icon-android-app" />
          </a>
          <a href="https://itunes.apple.com/in/app/shipa-freight/id1295657857?mt=8">
            <div className="icon-ios-app" />
          </a>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="copy-links">
        <div className="copy-link">© 2017 Agility</div>
        <div className="copy-link">
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
        <div className="copy-link">
          <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
        </div>
        <div className="copy-link">
          For more information, visit us at{' '}
          <a href="http://www.agility.com">www.agility.com</a>
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
