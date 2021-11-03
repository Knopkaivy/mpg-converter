import React, { useEffect } from 'react';

const Lp100ToMpg = ({ mpg, lp100, setMpg, updateLp100 }) => {
  useEffect(() => {
    setMpg((((100 / lp100) * 3.78541) / 1.609344).toFixed(2));
  }, [lp100]);
  return (
    <div className="input-container">
      <div className="input-section">
        <input id="mpg" type="number" value={mpg} disabled="disabled" />
        <label for="mpg">Miles Per Gallon</label>
      </div>
      <div className="input-section">
        <input id="lp100" type="number" value={lp100} onChange={updateLp100} />
        <label for="lp100">Liters Per 100 km</label>
      </div>
    </div>
  );
};

export default Lp100ToMpg;