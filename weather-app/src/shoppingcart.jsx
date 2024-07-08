import React, { useState } from 'react';

const initialItems = [
  { id: 1, name: 'Apple', price: 1 },
  { id: 2, name: 'Banana', price: 0.5 },
  { id: 3, name: 'Orange', price: 0.75 },
  { id: 4, name: 'Milk', price: 2.5 },
  { id: 5, name: 'Bread', price: 2 },
];

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <h2>Available Items</h2>
        <ul>
          {initialItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}
              <button onClick={() => addItem(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price.toFixed(2)} x
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value, 10))
                    }
                  />
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <p>Total: ${calculateTotal()}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
