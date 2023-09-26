import React, { useState, createContext, useEffect } from "react";
import AllProducts from "../products/Products";

export const ShopContext = createContext(null);

const getDefaultCart = (products) => {
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = ({ children, products }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart(products));
  const [cartItem, setCartItem] = useState(getDefaultCart(products));

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const product in cartItems) {
      if (cartItems[product] > 0) {
        let productInfo = products.find(
          (product) => product.id === Number(product)
        );
        totalAmount += cartItems[product] * productInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (productId) => {
    setCartItems((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => ({ ...prev, [productId]: prev[productId] - 1 }));
  };

  const updateCartItemCount = (newAmount, productId) => {
    setCartItems((prev) => ({ ...prev, [productId]: newAmount }));
  };

  const contextValue = {
    cartItem,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
