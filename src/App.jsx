import React, { useContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./products/Products";
import DetailCard from "./products/DetailCard";
import Nav from "./Nav/Nav";
import { GiGems } from "react-icons/gi";
import { Cart } from "./Cart/Cart";
import SideBar from "./SideBar/SideBar";
// import { Header } from "./headFoot/Header";
import SearchContext from "./context/SearchContext.jsx";
import { FilterSearchBar } from "./Nav/Search.jsx"; // Import the component with {} around its name
// import Profile from "./components/Profile";
// import About from "./Pages/About.jsx";
// import Contact from "./Pages/Contact.jsx";
import Home from "./Pages/Home.jsx";
// import CartPage from "./Cart/CartPage.jsx";
// import WishlistPage from "./Pages/WishlistPage";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<AllProducts />} /> */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/Header" element={<Header />} /> */}
        <Route path="/Cart" element={<Cart />} />
        {/* <Route path="/Cart" element={<CartPage />} /> */}
        <Route path="/Search" element={<FilterSearchBar />} />
        {/* <Route path="/Profile" element={<Profile />} /> */}
        {/* <Route path="/About" element={<About />} /> */}
        {/* <Route path="/Contact" element={<Contact />} /> */}
        {/* <Route path="/Wishlist" element={<WishlistPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
