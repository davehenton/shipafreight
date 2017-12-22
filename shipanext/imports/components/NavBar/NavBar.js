import React from 'react';

const NavBar = props => (
  <div className="nav-bar">
    <div className="nav-bar-inner">
      <div className="nav-bar-left">
        <a href="/">
          <div className="brand">
            <img src="agility-logo.png" alt="Agility" />
          </div>
        </a>
        <a href="/">
          <div className="nav-link">Quote</div>
        </a>
        <a href="/">
          <div className="nav-link">Book</div>
        </a>
        <a href="/">
          <div className="nav-link">Track</div>
        </a>
      </div>
      <div className="nav-bar-right">
        <a href="/">
          <div className="nav-link">Login</div>
        </a>
        <a href="/">
          <div className="nav-link primary">Sign Up</div>
        </a>
      </div>
    </div>
  </div>
);

export default NavBar;
