import React from 'react';
import { Link } from 'react-router-dom';
import TomDomLogo from '../assets/TomDomLogo';
import NavUserSVG from '../assets/NavUserSVG';
import NavContactSVG from '../assets/NavContactSVG';
import NavScoreSVG from '../assets/NavScoreSVG';
import NavStatsSVG from '../assets/NavStatsSVG';

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
            <Link to="/account">
              <NavUserSVG />
              <span className="nav_ul-span">User</span>
            </Link>
          </li>
          <li>
            <Link to="/score">
              <NavScoreSVG />
              <span className="nav_ul-span">Score</span>
            </Link>
          </li>
          <li>
            <Link to="/stats">
              <NavStatsSVG />
              <span className="nav_ul-span">Stats</span>
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
        <h6>TomDom Corporation</h6>
      </div>
    </header>
  );
}
