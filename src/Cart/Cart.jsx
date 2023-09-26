// Cart.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../context/cartContext";
import { CartItem } from "./CartItem";
import "./cart.css";
import Card from "../products/Card";

export const Cart = () => {
  const { cart, getTotalCartAmount, checkout } = useContext(CartContext);
  const navigate = useNavigate();
  console.log("cart Page", cart);
  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="cartItem">
        {Object.keys(cart).map((productId) => (
          <Card key={productId} product={cart[productId]} />
        ))}
      </div>

      {Object.keys(cart).length > 0 ? (
        <div>
          <h2>Total: ${getTotalCartAmount()}</h2>
          <button onClick={checkout}>Checkout</button>
        </div>
      ) : (
        <div>
          <h2>Your cart is empty</h2>
          <button onClick={() => navigate("/")}>Go to Products</button>
        </div>
      )}
    </div>
  );
};
