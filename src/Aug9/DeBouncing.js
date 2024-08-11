import React, { useState } from "react";

// implementing debouncing from the scratch

const deBounce = (fn, delay) => {
  let timerId;
  return function (args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => fn(...args), delay);
  };
};

const DeBouncing = () => {
  const [name, setName] = useState("");

  return (
    <>
      <input
        value={name}
        onChange={(e) => {
          console.log(e.target.value);
          setName(e.target.value);
        }}
      />
    </>
  );
};

export default DeBouncing;
