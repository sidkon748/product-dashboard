// Task 3 
// Create the ProductList  Component

//Imports React and ProductItem components
import React from 'react';
import ProductItem from './ProductItem';  

// function finds each product's details with a unique key id passed to productItem
const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem 
          key={product.id}  
          product={product}  
        />
      ))}
    </div>);
    };

// Shares ProductList file
export default ProductList;
