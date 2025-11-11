import React from 'react';
import { Link } from 'react-router-dom';
import useNavRoute from '../../hooks/useNavRoute';
const AdvancedDropdown = () => {
  const gotoroute = useNavRoute();
  return (
    <div>
      <div className="container">
        <label>Advanced Section</label>
        <select name="advanced" onChange={gotoroute}>
          <option value="Phaser.js">
            <Link>Phaser.js</Link>
          </option>

          <option value="Three.js">
            <Link>Three.js</Link>
          </option>

          <option value="UseState">
            <Link>UseState</Link>
          </option>

          <option value="UseEffect">
            <Link>UseEffect</Link>
          </option>

          <option value="pern">
            <Link>PERN</Link>
          </option>

          <option value="napi">
            <Link>N-API</Link>
          </option>
        </select>
      </div>
    </div>
  );
};

export default AdvancedDropdown;
