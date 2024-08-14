import React, { useState } from "react";

export default function DogPic() {
  const [dogPic, setDogPic] = useState(null);

  const handleDogPic = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();

    setDogPic(data);
  };

  return (
    <>
      <h1>Dog Picture</h1>
      <label>
        Select a breed :
        <select>
          <option value="Random">Random</option>
          <option value="Bagle">Bagle</option>
          <option value="Boxer">Boxer</option>
          <option value="Dalmatian">Dalmatian</option>
          <option value="Husky">Husky</option>
        </select>
      </label>

      {dogPic && <img src="" alt=""></img>}

      <button>Next</button>
    </>
  );
}
