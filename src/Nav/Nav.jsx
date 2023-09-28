import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
import { Profile } from "../components/Profile.jsx";
import { CartItem } from "../Cart/CartItem";
import { Cart } from "../Cart/Cart";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../components/Auth";

const Nav = () => {
  const navigate = useNavigate();
  const auth = useAuth();
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
      {!auth.user && <NavLink to="/Login">Login</NavLink>}
    </nav>
  );
};

export default Nav;
