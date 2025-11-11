import React from 'react';
import Stopwatch from '../components/fundamentals/Stopwatch';

const StopwatchPage = () => {
  return (
    <div className="card">
      <h1 className='compTitle'>Stopwatch</h1>
      <p className="explainer">
        If you enjoyed the Counter example, this component expands on that concept by adding more precise time tracking and control logic. It builds on useState and useEffect to update the display in
        real time, while introducing useRef to persist data between renders without causing re-renders. Together, these hooks demonstrate how to manage continuous updates, cleanup intervals properly,
        and coordinate multiple states to create an accurate, interactive stopwatch.
      </p>

      <div>
        <Stopwatch initialSeconds={0} tickMs={1000} />
      </div>
    </div>
  );
};

export default StopwatchPage;
