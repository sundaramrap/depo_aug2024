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
  }

  return (
    <>
      <p>seconds passed :</p>
      <button>Start</button>
      <button>Stop</button>
    </>
  );
}
