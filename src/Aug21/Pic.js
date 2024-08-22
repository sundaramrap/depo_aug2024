import React, { useEffect, useState } from "react";

export default function Pic() {
  //useState to handle the titile and  id in the main content

  const [handlePic, setHandlePic] = useState([]);

  // make a network call
  const handlePicture = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await response.json();
    // console.log("This is the wholw data fetched ", data);
    setHandlePic(data);
  };

  useEffect(() => {
    handlePicture();
  }, []);

  return (
    <>
      <h1>Pictures are shown here</h1>
      {handlePic.map((element) => {
        return (
          <div>
            <p> Album Id : {element.id}</p>
            <h5>Album Title : {element.title}</h5>
          </div>
        );
      })}
    </>
  );
}
