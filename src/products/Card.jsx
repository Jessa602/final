import React from "react";
import AllProducts from "./Products";
import "./products.css";
import { BsFillCartPlusFill, BsCartDashFill } from "react-icons/bs";

export default function SingleProduct({ product }) {
  return (
    <>
      <section className="card">
        <img src={product.image} className="card-img" alt="..." />
        <div className="card-details">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-category">{product.category}</p>
          <p className="card-description">{product.description}</p>
          <p className="card-price">${product.price}</p>
          <div className="add-to-cart">
            <BsFillCartPlusFill size={32} />
            {/* <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          /> */}
            <BsCartDashFill size={32} />
          </div>
        </div>
      </section>
    </>
  );
}
