// src/Component/Home.js
import React, { useEffect, useState } from 'react';
import {ProductData} from '../API/constants';
import Product from '../Components/Product';
import fetchDataWithToken, { fetchWithToken } from '../API/productAPI';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const result = await fetchDataWithToken();
        setData(result);
      } catch (error) {
        console.error('Error in fetching API:', error);
      }
    };

    fetchAPI();
    
  }, []);

  const prod = ProductData;

  return (
    <div className="product-list">
        <h1>Product List</h1>
        <p>{data}</p>
      {prod.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};



export default Home;
