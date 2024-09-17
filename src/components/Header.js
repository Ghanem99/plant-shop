import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <header>
      <h1>Plant Shop</h1>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
