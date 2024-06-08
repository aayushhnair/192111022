import React, { useEffect, useState } from 'react';
import { ProductData } from '../API/constants';
import Product from '../Components/Product';
import fetchDataWithToken from '../API/productAPI';

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

  if (!data) {
    return null; 
  }

  return (
    <div className="product-list">
      <h1>Product List</h1>
      {data.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Home;
