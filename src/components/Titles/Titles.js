import React from 'react';
import './Titles.scss';

function Titles() {
  return (
    <div className="sideblock">
      <div className="bg night_bg"></div>
      <div className="bg frosty_bg"></div>
      <div className="bg sunny_bg"></div>
      <div className="text-container titles">
        <h1 className="titles__title">Weather Finder</h1>
        <p className="titles__subtitle">
          Find temperature, conditions, and more...
        </p>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
      </div>
      <div className="ground1 ground1_night"></div>
      <div className="ground1 ground1_frosty"></div>
      <div className="ground1 ground1_sunny"></div>
      <div className="ground2 ground2_night"></div>
      <div className="ground2 ground2_frosty"></div>
      <div className="ground2 ground2_sunny"></div>
    </div>
  );
}

export default Titles;