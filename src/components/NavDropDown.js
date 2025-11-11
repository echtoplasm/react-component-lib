import React from 'react';
import { Link } from 'react-router-dom';
const AdvancedDropdown = () => {
  return (
    <div>
      <div className="container">
        <label>Advanced Section</label>
        <select name="advanced">
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

        </select>
      </div>
    </div>
  );
};

export default AdvancedDropdown;
