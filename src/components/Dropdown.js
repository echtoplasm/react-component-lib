import React from 'react';
import { useState } from 'react';

const Dropdown = () => {
  const [lang, setLang] = useState('');

  return (
    <div>

      <div className="container">
        <form>
          <label>Choose a language:</label>
          <select name="languages" onChange={e => setLang(e.target.value)}>
            <option value="JavaScript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
          </select>
          <button type="submit">Submit</button>
        </form>
        {lang && <span>You have selected {lang}</span>}
      </div>
    </div>
  );
};

export default Dropdown;
