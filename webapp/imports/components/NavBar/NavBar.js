import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = props => (
  <div className="nav-bar">
    <div className="nav-bar-inner">
      <div className="nav-bar-left">
        <Link id="home-link" to="/">
          <div className="brand">
            <img src="agility-logo.png" alt="Agility" />
          </div>
        </Link>
        <NavLink id="quote-link" to="/quote">
          <div className="nav-link">Quote</div>
        </NavLink>
        <NavLink id="book-link" to="/book">
          <div className="nav-link">Book</div>
        </NavLink>
        <NavLink id="track-link" to="/track">
          <div className="nav-link">Track</div>
        </NavLink>
      </div>
      <div className="nav-bar-right">
        <NavLink id="log-in-link" to="/log-in">
          <div className="nav-link">Log In</div>
        </NavLink>
        <NavLink id="sign-up-link" to="/sign-up">
          <div className="nav-link">Sign Up</div>
        </NavLink>
      </div>
    </div>
  </div>
);

export default NavBar;
