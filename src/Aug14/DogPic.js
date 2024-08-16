import React, { useRef, useState } from "react";
import axios from "axios";

export default function DogPic() {
  const [dogPic, setDogPic] = useState(null);

  const handleDogPic = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();

    setDogPic(data);
  };

  useRef(() => {}, []);

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

// // defualt load- random pic will be shown -->when random will be click random dogs will be shuffled and shown

// src/session2-takehome/DogPics.js

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const DogPic = () => {
//   const [breed, setBreed] = useState("Random");
//   const [imageUrl, setImageUrl] = useState("");
//   const [error, setError] = useState(null);

//   const breeds = ["Random", "Beagle", "Boxer", "Dalmatian", "Husky"];

//   const fetchDogImage = async (breed) => {
//     try {
//       let url = "https://dog.ceo/api/breeds/image/random";
//       if (breed !== "Random") {
//         url = `https://dog.ceo/api/breed/${breed.toLowerCase()}/images/random`;
//       }
//       const response = await axios.get(url);
//       setImageUrl(response.data.message);
//     } catch (error) {
//       setError("Failed to fetch image");
//     }
//   };

//   useEffect(() => {
//     fetchDogImage(breed);
//   }, [breed]);

//   const handleBreedChange = (e) => {
//     setBreed(e.target.value);
//   };

//   const handleNextClick = () => {
//     fetchDogImage(breed);
//   };

//   return (
//     <div>
//       <h1>Dog Pictures</h1>
//       <select value={breed} onChange={handleBreedChange}>
//         {breeds.map((breed) => (
//           <option key={breed} value={breed}>
//             {breed}
//           </option>
//         ))}
//       </select>
//       <div>
//         {error && <p>{error}</p>}
//         {imageUrl && (
//           <img
//             src={imageUrl}
//             alt="Dog"
//             style={{ maxWidth: "500px", maxHeight: "500px" }}
//           />
//         )}
//       </div>
//       <button onClick={handleNextClick}>Next</button>
//     </div>
//   );
// };

// export default DogPic;
