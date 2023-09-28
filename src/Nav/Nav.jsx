import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

import { CartItem } from "../Cart/CartItem";
import { Cart } from "../Cart/Cart";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineShoppingCart
            className="nav-icons"
            onClick={() => navigate("/Cart")}
          />
        </a>
        <a href="">
          <AiOutlineUserAdd
            className="nav-icons"
            onClick={() => navigate("./Profile")}
          />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
