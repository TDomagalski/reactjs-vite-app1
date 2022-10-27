import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <header>
      <div className="nav_logo">
        {/* <img src={Logo} alt="TomDom" /> */}
        {/* <LogoIcon /> */}
        <Link to="/">TomDom</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="nav_footer">
        <h6>footer navigation</h6>
      </div>
    </header>
  );
}
