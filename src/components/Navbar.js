import React from 'react';
import FundDropDown from './FundDropDown';
import AdvancedDropdown from './NavDropDown';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="card">
        <div className="dropdown-container">
          <FundDropDown />
          <AdvancedDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
