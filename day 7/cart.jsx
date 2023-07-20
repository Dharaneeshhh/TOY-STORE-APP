import React, { useState } from 'react';
import './cart.css';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
};

const CartPage = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const  Cart=() => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  return (
    <div className="app">
      {/* Toy shop content */}
      {/* ... */}

      {/* Cart page */}
      <CartPage cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default Cart;
