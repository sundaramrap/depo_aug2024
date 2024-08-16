import React, { useState } from "react";
import axios from "axios";

//assigning breeds to
const breeds = ["Random", "Beagle", "Boxer", "Dlmatian", "Husky"];

export default function DogPic() {
  //state handle --> dog breed , --->doig pic

  const [selectBreed, setSelectBreed] = useState("Random");

  const [imgUrl, setImageUrl] = useState("");

  const fetchImgUrl = async () => {
    //netwoark call will be made to get the image

    try {
      let url;
      //since 2 urls will be used so ,making a single unit of url

      if (selectBreed === "Random") {
        url = "https://dog.ceo/api/breeds/image/random";
      } else {
        url("https://dog.ceo/api/breed/{breed}/images/random");
        const response = await axios.get("url");
        setImageUrl(response.data.message);
      }
    } catch (error) {
      console.log("Error in fetching the url ::", error);
      setImageUrl(""); //clearing the error url response
    }
  };

  //1.function where breed will be changed 2. function where next will be hjandled

  const handleBreedChange = (e) => {
    setSelectBreed(e.target.value);
  };

  const handleNextClick = () => {
    fetchImgUrl();
  };

  return (
    <>
      <div>
        <select value={selectBreed} onChange={handleBreedChange}>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>
      <div>
        {imgUrl && (
          <img
            src={imgUrl}
            alt="RandomDog"
            style={{ width: "150px", height: "150px" }}
          />
        )}
      </div>
      <div>
        <button onClick={handleNextClick}> Next</button>
      </div>
    </>
  );
}
