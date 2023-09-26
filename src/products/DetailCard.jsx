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

        <div>
          <Card product={product} />
          <p>{product.description}</p>
          <Link to="/">
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
