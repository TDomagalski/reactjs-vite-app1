import React from 'react';
import { Link } from 'react-router-dom';
import TomDomLogo from '../assets/TomDomLogo';
import NavAccountSVG from '../assets/NavAccountSVG';
import NavContactSVG from '../assets/NavContactSVG';

export default function Navigation() {
  return (
    <header>
      <div className="nav_logo">
        <Link to="/">
          <TomDomLogo />
        </Link>
      </div>
      <nav>
        <ul className="nav_ul">
          <li>
            <Link to="/about">
              <NavAccountSVG />
              <span className="nav_ul-span">Create Account</span>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <NavContactSVG />
              <span className="nav_ul-span">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="nav_footer">
        <h6>TomDom Corp.</h6>
      </div>
    </header>
  );
}
