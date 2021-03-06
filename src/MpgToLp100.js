import React, { useEffect } from 'react';

const MpgToLp100 = ({ mpg, lp100, updateMpg, setLp100 }) => {
  useEffect(() => {
    setLp100((100 / ((mpg * 1.609344) / 3.78541)).toFixed(2));
  }, [mpg]);
  return (
    <div className="input-container">
      <div className="input-section">
        <input
          id="mpg"
          type="number"
          value={mpg}
          min="1"
          onChange={updateMpg}
        />
        <label htmlFor="mpg">Miles Per Gallon</label>
      </div>
      <div className="input-section">
        <input
          id="lp100"
          type="number"
          value={lp100}
          min="1"
          disabled="disabled"
        />
        <label htmlFor="lp100">Liters Per 100 km</label>
      </div>
    </div>
  );
};

export default MpgToLp100;
