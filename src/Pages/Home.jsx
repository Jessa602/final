import AllProducts from "../products/Products";
import { GiGems } from "react-icons/gi";
import Nav from "../Nav/Nav";
import Sidebar from "../SideBar/SideBar";

const Home = () => {
  return (
    <>
      <div>
        <div className="title-container">
          <h1 className="site-title">
            <b>
              Jess Gems <GiGems />
            </b>
          </h1>
        </div>
      </div>

      <Sidebar />
      <Nav />

      <AllProducts />
    </>
  );
};

export default Home;
