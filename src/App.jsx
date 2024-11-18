// Task 2
// Create the App Component

// Imports React, ProductList, and AddProductForm
import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

const App = () => {
  // List of default products
  const defaultProducts = [
    { id: 1, name: 'Cheese', price: 10.05, description: 'French Brie' },
    { id: 2, name: 'Painting', price: 5.50, description: 'Fisherman By the Lighthouse' },
    { id: 3, name: 'Pillow', price: 19.99, description: 'Hilton Sleep Luxury' },
    { id: 4, name: 'Video Game', price: 57.99, description: 'Grand Theft Auto 6' },
    { id: 5, name: 'Lamp', price: 20.00, description: 'Antique Garryland Lighter' },
    { id: 6, name: 'Apples', price: 24.99, description: 'Ten Oregon Granny Smith' },
    { id: 7, name: 'Soap', price: 15.35, description: 'Herb Scented Western Handsoap' },
    { id: 8, name: 'Taco', price: 23.10, description: 'Missionary Corn Crust' },
    { id: 9, name: 'Water Bottle', price: 19.95, description: 'Fijian Aura' },
    { id: 10, name: 'Lemonade', price: 29.99, description: 'Instant Mix Refreshment' },
    { id: 11, name: 'Bacon', price: 39.99, description: 'Uncaged Smokehouse Variety' },
    { id: 12, name: 'Book', price: 49.99, description: 'How to Conquer Yourself' },
  ];

  // useState to manage the list of products
  const [products, setProducts] = useState(defaultProducts);

  // Function for adding new products
  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  //Task 7 
  // Pass Data Between Components

  // Output for product list applying addProduct function to AddProductForm & ProductList
  return (
    <div className="app">
      <h1>Product List For The Store</h1>
      <AddProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
};

//Shares App file
export default App
