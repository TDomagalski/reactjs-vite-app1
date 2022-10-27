import React from 'react';

export default function Navigation() {
  return (
    <header>
      <div className="nav_logo">
        {/* <img src={Logo} alt="TomDom" /> */}
        {/* <LogoIcon /> */}
        <h2>TomDom</h2>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Link1</a>
          </li>
          <li>
            <a href="#">Link2</a>
          </li>
          <li>
            <a href="#">Link3</a>
          </li>
        </ul>
      </nav>
      <div className="nav_footer">
        <h6>footer navigation</h6>
      </div>
    </header>
  );
}
