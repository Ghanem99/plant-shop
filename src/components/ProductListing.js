import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/actions';

const plants = [
  { id: 1, name: 'Aloe Vera', price: 10, category: 'Succulent', img: '/images/aloe.jpg' },
  { id: 2, name: 'Snake Plant', price: 15, category: 'Indoor', img: '/images/snake.jpg' },
  // Add more plants here
];

const ProductListing = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-list">
      {plants.map((plant) => (
        <div key={plant.id} className="plant-item">
          <img src={plant.img} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
