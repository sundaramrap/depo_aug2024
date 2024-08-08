import React, { useEffect, useState } from "react";

export default function Lifecycle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Hello iam use effect");
  }, []);

  return (
    <div>
      Hello UseEffect{" "}
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment {count}
      </button>
    </div>
  );
}

/** Understanding lifecycle method in react
 * 1.ComponentDiupdate
 * 2.ComponentDidMount
 * 3.Component DDid Umoutn---> understnading their usage in the new react
 *
 * useEffect - It is a hook used to perform sideEffect in the component
 * Side Effects--> fetching data,directly updating DOM, Timer
 * UseEffect accepts two arguments ----> useEffect(<function>,<dependency>),second argument is optional
 */

/** TASK 2
 * create a button and add fucntionalisties such that
 * when the button is clicked the componets are shown/hidden.
 * (to learn comopnetDidUnmount)
    Steps
    -Make a button 
    -Make a constructor -->insisde App.js--> to take action on the state 

 */
