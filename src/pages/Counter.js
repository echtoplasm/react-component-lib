import React from 'react';
import Counter from '../components/Counter';
const CounterPage = () => {
  return (
    <div className='card'>
      <h1>Hello This is a counter component</h1>
      <div className='card'>  
      <Counter />
      </div>
    </div>
  );
};

export default CounterPage;
