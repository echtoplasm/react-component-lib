import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='card'>
      <nav className='navbar'>
        <ul>
          <li>
            <Link className="navLink" to="/">
              Counter
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/dropdownpage">
              Dropdown
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/modalpage">
              Modal
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/apipage">
              API Fetch
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/lucide">
              Lucide
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
