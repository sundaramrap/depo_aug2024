import React from "react";

export default function Button({ text, btnClick }) {
  return <button onClick={btnClick}>{text}</button>;
}
