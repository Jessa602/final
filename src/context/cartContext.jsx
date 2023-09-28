// cartContext.jsx
import React, { createContext, useContext, useState } from "react";
import products from "../products/Products";

const CartContext = createContext(null);

const getDefaultCart = () => {
  let storedCart = localStorage.getItem("cart");

  return storedCart ? JSON.parse(storedCart) : {};
};

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = Object.values(cart).reduce((acc, product) => {
      return acc + product.count * product.price;
    }, 0);
    totalAmount = totalAmount.toFixed(2);

    return totalAmount;
  };

  const addToCart = (product) => {
    if (product.id in cart) {
      cart[product.id].count += 1;
      setCart((prev) => ({ ...prev }));
    } else {
      product.count = 1;

      setCart((prev) => ({ ...prev, [product.id]: { ...product } + 1 }));
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const removeFromCart = (product) => {
    if (product.id in cart) {
      cart[product.id].count -= 1;
      setCart((prev) => ({ ...prev }));
    } else {
      product.count = 1;

      setCart((prev) => ({ ...prev, [product.id]: { ...product } - 1 }));
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const clearCart = () => {
    setCart(getDefaultCart());
  };

  const updateCartItemCount = (newAmount, productId) => {
    setCart((prev) => ({ ...prev, [productId]: newAmount }));
  };

  const checkout = () => {
    setCart(getDefaultCart());
  };

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    updateCartItemCount,
    getTotalCartAmount,
    checkout,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartContext;
