// cartContext.jsx
import React, { createContext, useContext, useState } from "react";
import products from "../products/Products";

const CartContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const product in cart) {
      if (cart[product] > 0) {
        let productInfo = products.find((prod) => prod.id === Number(product));
        totalAmount += cart[product] * productInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (productId) => {
    setCart((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const removeFromCart = (productId) => {
    setCart((prev) => ({ ...prev, [productId]: prev[productId] - 1 }));
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
