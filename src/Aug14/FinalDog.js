import React, { useState } from "react";
import axios from "axios";

const breed = ["Random", "Beagle", "Husky", "Boxer", "Dalmatian"];

export default function FinalDog() {
  const [selectBreed, setSelectBreed] = useState("Random");
  const [imgDog, setimgDog] = useState("");

  //make a function to handle the url of random and ohter dog breeds
  const handleimg = async () => {
    let url;
    if (selectBreed === "Ransdom") {
    }
  };

  return (
    <>
      <h1>Dog images</h1>
      <div>
        <select></select>
      </div>
      <div></div>
      <div>
        <button>Next_Image</button>
      </div>
    </>
  );
}
