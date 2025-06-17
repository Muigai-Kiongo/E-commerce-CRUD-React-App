import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import AddProduct from "./components/AddProduct";
import ShoppingCart from "./components/ShoppingCart";
import { useCart } from "./hooks/useCart";
import products from "./components/products";
import LandingPage from "./components/LandingPage";

const App = () => {
  const { cartItems, addToCart, removeFromCart, totalPrice } = useCart();

  const [locProducts, setLocProducts] = useState(() => {
    try {
      const savedProducts = localStorage.getItem("products");
      return savedProducts ? JSON.parse(savedProducts) : [];
    } catch (error) {
      console.error("Failed to load products from localStorage:", error);
      return [];
    }
  });

  const combinedProducts = [...products, ...locProducts];

  const addProduct = (newProduct) => {
    const nextId =
      combinedProducts.length > 0
        ? Math.max(...combinedProducts.map((p) => p.id)) + 1
        : 1;
    const priceNum = parseFloat(newProduct.price);

    const productToAdd = {
      id: nextId,
      name: newProduct.name,
      price: isNaN(priceNum) ? 0 : priceNum.toFixed(2),
      shortDescription: newProduct.shortDescription,
      longDescription: newProduct.longDescription,
      image: newProduct.image || "./images/template.jpg",
    };

    const updatedLocProducts = [...locProducts, productToAdd];
    setLocProducts(updatedLocProducts);

    try {
      localStorage.setItem("products", JSON.stringify(updatedLocProducts));
      alert(`${newProduct.name} added to product list!`);
    } catch (error) {
      console.error("Failed to save products to localStorage:", error);
    }
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/products"
          element={
            <ProductList products={combinedProducts} addToCart={addToCart} />
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProductDetail products={combinedProducts} addToCart={addToCart} />
          }
        />
        <Route
          path="/shopping-cart"
          element={
            <ShoppingCart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              totalPrice={totalPrice}
            />
          }
        />
        <Route
          path="/add-product"
          element={<AddProduct addProduct={addProduct} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
