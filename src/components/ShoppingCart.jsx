import React from "react";

const ShoppingCart = ({ cartItems, removeFromCart, totalPrice }) => {
  return (
    <div className="shopping-cart">
      <h1 className="cart-title">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h2 className="item-name">{item.name}</h2>
              <p>Ksh.{item.price}</p>
              <button
                className="remove-button"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <h3 className="total-price">
            Total Price: Ksh {totalPrice.toFixed(2)}
          </h3>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
