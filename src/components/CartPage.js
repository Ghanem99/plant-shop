import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementItem, decrementItem, removeItem } from './redux/actions';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => dispatch(incrementItem(item.id))}>+</button>
          <button onClick={() => dispatch(decrementItem(item.id))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}
      <h3>Total Items: {totalItems}</h3>
      <h3>Total Price: ${totalPrice}</h3>
      <button>Checkout (Coming Soon)</button>
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default CartPage;
