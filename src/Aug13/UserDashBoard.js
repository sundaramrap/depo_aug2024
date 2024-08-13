import React, { useState } from "react";
import Button from "./Button";

export default function UserDashBoard() {
  const [userData, setUserData] = useState(null);

  const handleUserData = async (id) => {
    try {
      const response = await fetch(`https://reqres.in/api/users/${id}`);
      const data = await response.json();
      setUserData(data.data);
    } catch (error) {
      console.log("Error in fetchinf the data ::", error);
    }
  };

  return (
    <>
      <h1>User Dash Board</h1>
      <div>
        <Button onClick={() => handleUserData(1)} lable="1" />
        <Button onClick={() => handleUserData(2)} lable="2" />
        <Button onClick={() => handleUserData(3)} lable="3" />
        <Button onClick={() => handleUserData(4)} lable="100" />
      </div>
      {userData && (
        <div>
          <p>
            Name :{userData.first_name} {userData.last_name}
          </p>
          <p>Email :{userData.email}</p>
          <img src={userData.avatar} alt={userData.first_name} />
        </div>
      )}
    </>
  );
}
