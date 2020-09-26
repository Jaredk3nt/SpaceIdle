import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
// Utils
import useLocalStorage from './utils/useLocalStorage';
// Constants
const DELAY = 2000;

function App() {
  const counter = useRef();
  const [width, setWidth] = useState(0);
  const [state, setState] = useLocalStorage('scifidle', {
    count: 0,
    running: false,
    lastUpdated: null,
  });

  useEffect(() => {
    // If running, when was lastUpdated,
    if (state.running) {
      const updatedCount = Math.floor((Date.now() - state.lastUpdated) / DELAY);
      alert(`${updatedCount} happened while you were gone!`);
      setState((prev) => ({
        ...prev,
        count: prev.count + updatedCount,
      }));
      startCounter();
    }
  }, []);

  function toggleCounter() {
    if (state.running) {
      // Stop counter
      clearInterval(counter.current);
      setState((prev) => ({ ...prev, running: false }));
      setWidth(0);
    } else {
      // Start counter
      setState((prev) => ({ ...prev, running: true }));
      startCounter();
    }
  }

  function startCounter() {
    setWidth(100);
    counter.current = setInterval(() => {
      setState((prev) => ({
        ...prev,
        count: prev.count + 1,
        lastUpdated: Date.now(),
      }));
      setWidth(0);
      setTimeout(() => {
        console.log('reset');
        setWidth(100);
      }, 100);
    }, DELAY);
  }

  return (
    <div className="App">
      <div className="counter">
        <p>{state.count}</p>
        <div className="progress-bar">
          <div
            style={{
              width: `${width}%`,
              transition: width ? `width ${DELAY / 1000}s linear` : '',
            }}
            className="progress-bar__tracker"
          ></div>
        </div>
        <button onClick={toggleCounter}>
          {state.running ? 'stop' : 'start'}
        </button>
      </div>
    </div>
  );
}

export default App;
