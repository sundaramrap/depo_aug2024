import React, { useEffect, useRef, useState } from "react";

export default function RefUse() {
  const [textv, setText] = useState(" ");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <>
      {/* there will be a change in the value in the input box and we have to give the handle to the react we will declare the useState */}
      {/* ref attribute is used to capture the current obj  */}
      <input
        ref={inputRef}
        value={textv}
        onChange={(e) => setText(e.target.value)}
      ></input>
    </>
  );
}

/**ACTIVITY--->focus on the input box
 * Bring the cursor to  the input without clicking it.
 value--> it is linked with the state so that when state changes value changes
 onChange--> to give controll to the react handler 
 */
