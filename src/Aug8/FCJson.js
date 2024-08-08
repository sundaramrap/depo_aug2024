// ACTIVITY TO FETCH DATA FROM THE NETWORK AND MAKE USE OF IT

import React, { useEffect, useState } from "react";

export default function FCJson() {
  // showing comopnent in useeffect --> declare a function to handle the network call // to use the function we will use setState
  const [data, setData] = useState([]);

  const handleUserData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    //since we want the data to be shown to we will declare it here
    setData(data);
  };

  useEffect(() => {
    handleUserData();
  }, []);

  return (
    <>
      <h1>User List </h1>
      {data.map((data) => {
        return <p key={data.id}>{data.name}</p>;
      })}
    </>
  );
}

/** First call useEffect --> whener a render hannder usseeffect is called first, it will have a callback (will be executed whener thrie is property change)
 *
 * define the function to call it inside the useEffect
 *
 *
 */
