const fetchDataWithToken = async () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3ODI3MDc0LCJpYXQiOjE3MTc4MjY3NzQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjEwNDJlMmMzLTI3MmMtNGZhYy04ZGEyLWIwOWZjYzI5MzRjYyIsInN1YiI6IjE5MjExMTAyMi5zc2VAc2F2ZWV0aGEuY29tIn0sImNvbXBhbnlOYW1lIjoiUmV2b2x2ZSIsImNsaWVudElEIjoiMTA0MmUyYzMtMjcyYy00ZmFjLThkYTItYjA5ZmNjMjkzNGNjIiwiY2xpZW50U2VjcmV0IjoiSkJxQlhoR3lMRURIU3NnZSIsIm93bmVyTmFtZSI6IkF5dXNoVk5haXIiLCJvd25lckVtYWlsIjoiMTkyMTExMDIyLnNzZUBzYXZlZXRoYS5jb20iLCJyb2xsTm8iOiIxOTIxMTEwMjIifQ.VoYe-LX0w4uPe-B7OCRopQyn0mkZJziCukamO7Ht_y0"
     const url = 'http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000';
  
     
    try {
      console.log('Fetching data from:', url);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error.message);
      throw new Error('Error fetching data');
    }
  };
  
  export default fetchDataWithToken;
  
  