import React, { useEffect } from 'react';

const Lp100ToMpg = ({ mpg, lp100, setMpg, updateLp100 }) => {
  useEffect(() => {
    setMpg((((100 / lp100) * 3.78541) / 1.609344).toFixed(2));
  }, [lp100]);
  return (
    <div className="input-container">
      <div className="input-section">
        <input id="mpg" type="number" value={mpg} min="1" disabled="disabled" />
        <label htmlFor="mpg">Miles Per Gallon</label>
      </div>
      <div className="input-section">
        <input
          id="lp100"
          type="number"
          value={lp100}
          min="1"
          onChange={updateLp100}
        />
        <label htmlFor="lp100">Liters Per 100 km</label>
      </div>
    </div>
  );
};

export default Lp100ToMpg;
