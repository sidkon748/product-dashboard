// Task 4 
// Create the ProductItem component

//Imports React 
import React from 'react';

// Receives each product's name, price (rounded to two cents), and description for display
const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <p className="product-description">{product.description}</p>
    </div>
  );
};

// Shares ProductItem file
export default ProductItem;
