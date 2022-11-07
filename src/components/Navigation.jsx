import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
            <NavLink to="/account">
              <NavUserSVG />
              <span className="nav_ul-span">User</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/score">
              <NavScoreSVG />
              <span className="nav_ul-span">Score</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/stats">
              <NavStatsSVG />
              <span className="nav_ul-span">Stats</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <NavContactSVG />
              <span className="nav_ul-span">Contact</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="nav_footer">
        <h6>TomDom Corporation</h6>
      </div>
    </header>
  );
}
