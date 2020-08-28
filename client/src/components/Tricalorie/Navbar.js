import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper blue">
        <div className="container">
          <a href="#" className="brand-logo center">
            Tracalorie
          </a>
          <ul className="right">
            <li>
              <a href="#" className="clear-btn btn blue lighten-3">
                Clear All
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
