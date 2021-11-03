import React, { useState, useEffect } from 'react';
import MpgToLp100 from './MpgToLp100';
import Lp100ToMpg from './Lp100ToMpg';

const Converter = (props) => {
  const [mpg, setMpg] = useState(0);
  const [lp100, setLp100] = useState(0);
  const [mpgIntoLp100, setMpgIntoLp100] = useState(true);
  //   useEffect(() => {
  //     setLp100((100 / ((mpg * 1.609344) / 3.78541)).toFixed(2));
  //   }, [mpg]);
  //   useEffect(() => {
  //     setMpg((((lp100 / 100) * 3.78541) / 1.609344).toFixed(2));
  //   }, [lp100]);

  let updateMpg = (evt) => {
    return setMpg(evt.target.value);
  };
  let updateLp100 = (evt) => {
    return setLp100(evt.target.value);
  };
  let toggleConverter = () => {
    return setMpgIntoLp100(!mpgIntoLp100);
  };

  return (
    <div className="Converter-container">
      <h1>I'm a Converter component</h1>
      <div>
        <button onClick={toggleConverter}>Switch</button>
      </div>
      {mpgIntoLp100 ? (
        <MpgToLp100
          mpg={mpg}
          lp100={lp100}
          updateMpg={updateMpg}
          setLp100={setLp100}
        />
      ) : (
        <Lp100ToMpg
          mpg={mpg}
          lp100={lp100}
          updateLp100={updateLp100}
          setMpg={setMpg}
        />
      )}
    </div>
  );
};

export default Converter;
