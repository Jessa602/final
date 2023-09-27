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
import FilterSearchBar from "./components/Search";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/search" element={FilterSearchBar} />
      </Routes>
    </>
  );
}

export default App;
