// Cart.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { CartItem } from "./CartItem";
import "./cart.css";

export const Cart = () => {
  const { cart, getTotalCartAmount, checkout } = useCart(); // Use useCart hook to get the context values
  const navigate = useNavigate();

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="cartItem">
        {Object.keys(cart).map((productId) => (
          <CartItem key={productId} item={cart[productId]} />
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
