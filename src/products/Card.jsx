import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { BsFillCartPlusFill, BsCartDashFill } from "react-icons/bs";
import { BiSolidDetail } from "react-icons/bi";
import Content from "./ExpandedCard";

export default function SingleProduct({ product }) {
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
            <BsFillCartPlusFill size={32} />
            <BsCartDashFill size={32} />
          </div>
          <div className="card-details">
            <Content description={product.description} />
          </div>
        </div>
      </section>
    </>
  );
}
