import React, { useEffect } from "react";

export default function Pic() {
  // make a network call
  const handlePicture = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    console.log("This is the wholw data fetched ", data);
  };

  useEffect(() => {
    handlePicture();
  }, []);

  return (
    <>
      <h1>Pictures are shown here</h1>
    </>
  );
}
