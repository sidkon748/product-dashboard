// Task 6
// Create the AddProductForm Component

//Imports React component for use in the AddProductForm Component
import React, { useState } from 'react';

// function starts off stating inputs of name, price, and description as consts
function AddProductForm({ addProduct }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
  
    // handleSubmit function uses if statement to make sure all product details are available  
    // in order to be used in the form
    const handleSubmit = (event) => {
        event.preventDefault();
      if (name && price && description) {
        addProduct({ name, price: parseFloat(price), description });
        setName('');
        setPrice('');
        setDescription('');
      }
    };
  
    // Returns Name, Price, and Description properties of product for display as a form for user input
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button type="submit">Add Product</button>
      </form>
    );
  }
  
  // Shares AddProductForm file
  export default AddProductForm;