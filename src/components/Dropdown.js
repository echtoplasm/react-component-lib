import React from 'react';
import { useState} from 'react';

const Dropdown = () => {
  const [lang, setLang] = useState('');

  return (
    <>
      <p>
        This component demonstrates controlled form inputs in React. The select
        dropdown's value is stored in state using useState. When the user
        selects an option, the onChange event fires and updates the state with
        e.target.value (the selected option's value). The selected language is
        then displayed conditionally below the form using curlybraces, which
        only renders the span when lang has a value.
      </p>
      <form>
        <label>Choose a language:</label>
        <select name="languages" onChange={e => setLang(e.target.value)}>
          <option value="javascript">javascript</option>
          <option value="python">python</option>
          <option value="java">java</option>
          <option value="cpp">C++</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      {lang && <span>You have selected {lang}</span>}
    </>
  );
};

export default Dropdown;
