import React from 'react';
import { Link } from 'react-router-dom';
import TomDomLogo from '../assets/TomDomLogo';

export default function Navigation() {
  return (
    <header>
      <div className="nav_logo">
        <Link to="/">
          <TomDomLogo />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="nav_footer">
        <h6>TomDom Corp.</h6>
      </div>
    </header>
  );
}
