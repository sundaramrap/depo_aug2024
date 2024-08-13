import React from "react";

export default function Button({ onClick, lable }) {
  return (
    <>
      <button onClick={onClick}>{lable}</button>
    </>
  );
}
