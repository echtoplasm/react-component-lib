import React, { useState, useRef, useEffect } from 'react';

export default function Stopwatch() {
  const [elapsedMs, setElapsedMs] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      // anchor start time relative to already elapsed time
      startTimeRef.current = Date.now() - elapsedMs;

      intervalRef.current = setInterval(() => {
        setElapsedMs(Date.now() - startTimeRef.current);
      }, 10); // update every 10 ms for smooth centiseconds

      return () => clearInterval(intervalRef.current);
    } else {
      clearInterval(intervalRef.current);
    }
  }, [isRunning, elapsedMs]);

  const toggle = () => setIsRunning(r => !r);

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setElapsedMs(0);
  };

  const format = ms => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    const centiseconds = Math.floor((ms % 1000) / 10)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}.${centiseconds}`;
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <p aria-live="polite" style={{ fontSize: '2rem', fontFamily: 'monospace', margin: '0 0 1rem' }}>
        {format(elapsedMs)}
      </p>
      <div>
        <button onClick={toggle} aria-pressed={isRunning} style={{ minWidth: '100px' }}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={reset} style={{ marginLeft: '0.75rem', minWidth: '100px' }}>
          Reset
        </button>
      </div>
    </div>
  );
}
