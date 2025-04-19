import React, { useEffect, useState } from 'react';
import './FlipClock.css';

const segmentMap = {
  0: [1, 2, 3, 5, 6, 7],
  1: [3, 6],
  2: [1, 3, 4, 5, 7],
  3: [1, 3, 4, 6, 7],
  4: [2, 3, 4, 6],
  5: [1, 2, 4, 6, 7],
  6: [1, 2, 4, 5, 6, 7],
  7: [1, 3, 6],
  8: [1, 2, 3, 4, 5, 6, 7],
  9: [1, 2, 3, 4, 6, 7],
};

const shouldSegmentBeActive = (segment, number) => segmentMap[number]?.includes(segment);

const Digit = ({ number }) => {
  const segments = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="digit">
      {segments.map((seg) => (
        <div
          key={seg}
          className={`segment segment-${seg} ${shouldSegmentBeActive(seg, number) ? 'active' : ''}`}
        ></div>
      ))}
    </div>
  );
};

const Colon = () => (
  <div className="colons">
    <div className="colon"></div>
    <div className="colon"></div>
  </div>
);

const FlipClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (unit) => unit.toString().padStart(2, '0').split('').map(Number);

  const [h1, h2] = formatTime(time.getHours());
  const [m1, m2] = formatTime(time.getMinutes());
  const [s1, s2] = formatTime(time.getSeconds());

  return (
    <div className="clock">
      <div className="hours">
        <Digit number={h1} />
        <Digit number={h2} />
      </div>
      <Colon />
      <div className="minutes">
        <Digit number={m1} />
        <Digit number={m2} />
      </div>
      <Colon />
      <div className="seconds">
        <Digit number={s1} />
        <Digit number={s2} />
      </div>
    </div>
  );
};

export default FlipClock;