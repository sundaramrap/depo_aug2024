import React, { useState } from "react";

// implementing debouncing from the scratch

const deBounce = (fn, delay) => {
  return function () {};
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
