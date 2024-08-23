import React from "react";
import Photo from "./Photo";
import Pic from "./Pic";
import { Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pic />} />
        <Route path="/Photo" element={<Photo />} />
      </Routes>
    </>
  );
}
