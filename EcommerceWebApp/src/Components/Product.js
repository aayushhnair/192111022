// src/Screens/Product.js
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src="https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_Pepsi.jpg" alt={product.productName} />
      <h2>{product.productName}</h2>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability}</p>
      <Link to={`/product/${product.productName}`} state={{ product }}>View Details</Link>
    </div>
  );
};

export default Product;
