import React, { useState, useRef } from "react";

export default function StopWatch() {
  const [startTime, setstartTime] = useState(null);
  const [now, setnow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setstartTime(Date.now());
    setnow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setnow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondPassed = 0;
  if (startTime != null && now != null) {
    secondPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <p>Time passed : {secondPassed.toFixed(4)}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}> StopWatch</button>
    </>
  );
}
