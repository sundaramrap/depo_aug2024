import React, { useEffect, useState } from "react";

export default function Photo() {
  const [photoBox, setPhotoBox] = useState([]);
  const handlePhoto = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    setPhotoBox(data);
  };

  useEffect(() => {
    handlePhoto();
  }, []);

  return (
    <>
      <h1>Pictures</h1>

      {photoBox.map((element) => {
        return (
          <div key={element.id}>
            <img src={element.thumbnailUrl} alt={element.title} />
          </div>
        );
      })}
    </>
  );
}
