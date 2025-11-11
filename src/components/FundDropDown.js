import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useNavRoute from '../hooks/useNavRoute';

const FundDropDown = () => {
  const handleRoute = useNavRoute();

  return (
    <div className="container">
      <label>Fundamentals</label>
      <select className="navDropDown" onChange={handleRoute} defaultValue="">
          <option value="/">
            <Link className="navLink" to="/">
              Counter
            </Link>
          </option>
          <option value="/dropdownpage">
            <Link className="navLink" to="/dropdownpage">
              Dropdown
            </Link>
          </option>
          <option value="/modalpage">
            <Link className="navLink" to="/modalpage">
              Modal
            </Link>
          </option>
          <option value="/apipage">
            <Link className="navLink" to="/apipage">
              API Fetch
            </Link>
          </option>
          <option value="/lucide">
            <Link className="navLink" to="/lucide">
              Lucide
            </Link>
          </option>
          <option value="/stopwatchpage">
            <Link className="navLink" to="/stopwatchpage">
              StopWatch
            </Link>
          </option>
      </select>
    </div>
  );
};

export default FundDropDown;
