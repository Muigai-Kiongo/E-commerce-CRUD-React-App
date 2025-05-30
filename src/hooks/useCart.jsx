import { useState, useEffect } from "react";

export const useCart = () => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const price =
      typeof item.price === "number"
        ? item.price
        : parseFloat(item.price.toString().replace(/[^\d.]/g, "")) || 0;
    return total + price;
  }, 0);

  return { cartItems, addToCart, removeFromCart, totalPrice };
};
