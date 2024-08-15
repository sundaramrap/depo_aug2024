import React, { useRef, useState } from "react";

export default function Temp() {
  // useState to acknowledge start button chnage
  //useState to aclnowledge stop button chnage

  const [startimer, setStartTimer] = useState(null);
  const [now, setnow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTimer(Date.now());
    setnow(Date.now());

    // we have taken the current value of the date which is putted into
    //now if there is anyinterval alresy running we will clear the interval before setInterval

    clearInterval(intervalRef.current);
    //after clearing the interval ,set the tinterval with 10 millisecond for it to update
    // the setInterval will be set in  intervalref, for interval reffernce to remember the update
    intervalRef.current = setInterval(() => {
      setnow(Date.now(), 10);
    });
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }
  //now to keep track of second pass we will have to subtract the now time from the intervalreffrence time

  let secondpassed = 0;

  if (startimer != null && now != null) {
    secondpassed = (now - startimer) / 1000;
  }

  return (
    <>
      <p>seconds passed :{secondpassed.toFixed(3)}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
