import React from 'react';
// Styles
import './styles.css';

export default function ProgressBar({ width, delay }) {
  return (
    <div className="progress-bar">
      <div
        style={
          width && delay
            ? {
                width: `${width}%`,
                transition: width ? `width ${delay / 1000}s linear` : '',
              }
            : { width: '0%' }
        }
        className="progress-bar__tracker"
      ></div>
    </div>
  );
}
