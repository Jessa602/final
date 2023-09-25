import NavBar from "../Nav/Nav.jsx";
import SideBar from "../SideBar/SideBar.jsx";
import { GiGems } from "react-icons/gi";

export const Header = () => {
  return (
    <div className="header">
      <div className="title-container">
        <h1 className="site-title">
          Jess&rsquo;s Gems <GiGems />{" "}
        </h1>
      </div>
      <NavBar className="nav" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <SideBar className="side" />
    </div>
  );
};
