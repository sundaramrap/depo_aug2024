import React, { useState } from "react";

export default function FCone() {
  // here to adding a hook to make the app dynamic<---- static
  const [counter, setCounter] = useState(5);
  const handleIncrement = () => {
    setCounter((prevState) => prevState + 1);
  };
  const handleDecrement = () => {
    setCounter((prevState) => prevState - 1);
  };

  return (
    <div>
      <button onClick={handleIncrement}>वृद्धि</button>
      <br></br>
      <span>{counter}</span>
      <br></br>
      <button onClick={handleDecrement}>घटाव</button>
    </div>
  );
}
