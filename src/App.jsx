import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./products/Products";
import DetailCard from "./products/DetailCard";
import Nav from "./Nav/Nav";
import { GiGems } from "react-icons/gi";
import { Cart } from "./Cart/Cart";
import SideBar from "./SideBar/SideBar";
import { Header } from "./headFoot/Header";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
