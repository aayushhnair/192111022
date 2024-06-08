// src/Screens/ProductDetails.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state;

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-details">
      <img src="https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_Pepsi.jpg" alt={product.productName} />
      <h2>{product.productName}</h2>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
};

export default ProductDetails;
