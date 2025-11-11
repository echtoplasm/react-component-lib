import React from 'react';
import Dropdown from '../components/fundamentals/Dropdown';

const DropDownPage = () => {
  return (
    <div className="card">
      <h1 className="compTitle">Dropdown Component</h1>
      <p className="explainer">
        This component demonstrates controlled form inputs in React. The select dropdown's value is
        stored in state using useState. When the user selects an option, the onChange event fires
        and updates the state with e.target.value (the selected option's value). The selected
        language is then displayed conditionally below the form using curlybraces, which only
        renders the span when lang has a value.
      </p>
      <Dropdown />
    </div>
  );
};

export default DropDownPage;
