import { useCart } from "../context/cartContext.jsx";
import React, { useContext } from "react";
import Card from "../products/Card";

export const CartItem = ({ product, productId, props }) => {
  const { cart, addToCart, removeFromCart, updateCartItemCount } =
    useContext(CartContext);
  const { id, title, image, price, description, category } = props.data;

  return <Card className="card" />;
};
