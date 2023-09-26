import Category from "./Category/Category.jsx";
import Price from "./Price/Price.jsx";
import Gender from "./Gender/Gender.jsx";

import "../SideBar/sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Gender handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
