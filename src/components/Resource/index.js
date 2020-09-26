import React, { useContext } from 'react';
// Components
import ProgressBar from '../ProgressBar';
// Constants
import { RESOURCES } from '../../constants';
// Styles
import './styles.css';

export default function Resource({
  crew,
  resource,
  xp,
  width,
  delay,
  onClick,
}) {
  return (
    <div className="resource-container" onClick={onClick}>
      <div className="resource-icon"></div>
      <div className="resource-details">
        <div className="resource-info">
          <p>{RESOURCES[resource].name}</p>
          <p>{xp} XP</p>
        </div>
        <ProgressBar width={width} delay={delay} />
      </div>
    </div>
  );
}
