import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./products.css";
import Card from "./Card";
import { BsFillCartPlusFill, BsCartDashFill } from "react-icons/bs";
import PropTypes from "prop-types";

export default function DetailCard({ product }) {
  return (
    <>
      <section className="card">
        <img src={product.image} className="card-img" alt="..." />
        {/* <div className="card-details">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-category">{product.category}</p>
          <p className="card-description">{product.description}</p>
          <p className="card-price">${product.price}</p>
          <div className="add-to-cart">
            <BsFillCartPlusFill size={32} />
            <BsCartDashFill size={32} />
          </div> */}
        <div>
          <Card product={product} />
          <p>{product.description}</p>
          <Link to="/">
            {" "}
            {/* Link back to the main page */}
            <button className="back">Back</button>
          </Link>
        </div>
      </section>
    </>
  );
}

DetailCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
