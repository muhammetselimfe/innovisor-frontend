import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ size = 'small' }) => (
  <div className={`loading-spinner ${size}`}></div>
);

export default LoadingSpinner;
