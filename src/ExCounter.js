import React, { useState } from "react";
import Button from "./ExButton";
import Disaplay from "./ExDisplay";
export default function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    setCount((prevState) => prevState - 1);
  };
  return (
    <div>
      <Button text="+" btnClick={handleIncrement} />
      <Disaplay text={count} />
      <Button text="-" btnClick={handleDecrement} />
    </div>
  );
}
