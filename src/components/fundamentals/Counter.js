import React from 'react';
import { useState, useEffect } from 'react';

const Counter = () => {
  const initErrVal = '';
  const [errMsg, setErrMessage] = useState(initErrVal);
  const [count, setCount] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter2(prevCounter => prevCounter + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count]);

  const handleClearErr = () => {
    setErrMessage(initErrVal);
  };

  const increment = () => {
    handleClearErr();
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setErrMessage('Count cannot be < 0');
    }
  };

  return (
    <div>
      <p className="explainer">
        This component demonstrates multiple React concepts: state management with useState, side
        effects with useEffect, and conditional rendering. The first counter (count) is controlled
        by increment/decrement buttons, with error handling that prevents negative values. The
        second counter (counter2) uses useEffect to automatically increment every second via
        setInterval. The effect includes a cleanup function that clears the interval when the
        component unmounts or when count changes. Notice the use of the updater function
        `prevCounter ➡️ prevCounter + 1` to avoid stale closures in the interval callback.
      </p>
      <div className="counterContainer">
        <p className="counter">Count: {count}</p>
        <div className="counterBtns">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          {errMsg && <span>{errMsg}</span>}
        </div>
      </div>
      <p className="counter">Counter 2 on interval: {counter2}</p>
    </div>
  );
};

export default Counter;
