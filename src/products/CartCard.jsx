// Card.jsx
import React, { useContext } from "react";
import { BsFillCartPlusFill, BsCartDashFill } from "react-icons/bs";
import Content from "./ExpandedCard";
import CartContext from "../context/cartContext";

export default function CartCard({ product }) {
  const { id, addToCart, removeFromCart } = useContext(CartContext);

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
          <BsFillCartPlusFill size={32} onClick={() => addToCart(product)} />
          <div className="card-count">
            <input value={product.count} readOnly={true} />
          </div>
          <BsCartDashFill size={32} onClick={() => removeFromCart(product)} />
        </div>
      </section>
    </>
  );
}
