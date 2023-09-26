import { useContext } from "react";
import { Link } from "react-router-dom"; // Import Link
import { BsFillCartPlusFill, BsCartDashFill } from "react-icons/bs";
import { BiSolidDetail } from "react-icons/bi";
import Content from "./ExpandedCard";
import CartContext from "../context/cartContext";

export default function Card({ product }) {
  const {
    id,
    image,
    title,
    category,
    price,
    description,
    addToCart,
    removeFromCart,
  } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(id);
  };

  return (
    <>
      <section className="card">
        <img src={product.image} className="card-img" alt="..." />
        <div className="card-details">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-category">{product.category}</p>
          <p className="card-price">
            <b>${product.price}</b>
          </p>
          <div className="add-to-cart">
            <BsFillCartPlusFill size={32} onClick={() => addToCart(product)} />
            {/* <BsCartDashFill size={32} onClick={() => removeFromCart(id)} /> */}
          </div>
          <div className="card-details">
            <Content description={product.description} />
          </div>
        </div>
      </section>
    </>
  );
}
