import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./products/Products";
import DetailCard from "./products/DetailCard";
import Nav from "./Nav/Nav";
import { GiGems } from "react-icons/gi";

function App() {
  return (
    <>
      <Nav />
      <div className="title-container">
        <h1 className="site-title">
          Jess's Gems <GiGems />{" "}
        </h1>
      </div>
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/DetailCard" element={<DetailCard />} />
      </Routes>
    </>
  );
}

export default App;
