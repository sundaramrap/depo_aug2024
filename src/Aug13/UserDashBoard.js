import React, { useState } from "react";
import Button from "./Button";

export default function UserDashBoard() {
  const [userData, setUserData] = useState(null);

  const handleUserData = async () => {
    try {
      const response = await fetch("");
    } catch (error) {
      console.log("Error in fetchinf the data ::", error);
    }
  };

  return (
    <>
      <h1>User Dash Board</h1>
      <div>
        <Button />
        <Button />
        <Button />
        <Button />
      </div>

      <div>
        <p>Name :</p>
        <p>Email :</p>
        <img />
      </div>
    </>
  );
}
