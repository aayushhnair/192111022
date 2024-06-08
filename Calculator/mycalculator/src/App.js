import React, { useState } from 'react';
import './App.css';

function App() {
  const [qualifier, setQualifier] = useState('p');
  const [response, setResponse] = useState(null);

  const apiUrls = {
    p: 'http://20.244.56.144/test/primes',
    f: 'http://20.244.56.144/test/fibo',
    e: 'http://20.244.56.144/test/even',
    r: 'http://20.244.56.144/test/rand'
  };

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3ODI4MzI5LCJpYXQiOjE3MTc4MjgwMjksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjEwNDJlMmMzLTI3MmMtNGZhYy04ZGEyLWIwOWZjYzI5MzRjYyIsInN1YiI6IjE5MjExMTAyMi5zc2VAc2F2ZWV0aGEuY29tIn0sImNvbXBhbnlOYW1lIjoiUmV2b2x2ZSIsImNsaWVudElEIjoiMTA0MmUyYzMtMjcyYy00ZmFjLThkYTItYjA5ZmNjMjkzNGNjIiwiY2xpZW50U2VjcmV0IjoiSkJxQlhoR3lMRURIU3NnZSIsIm93bmVyTmFtZSI6IkF5dXNoVk5haXIiLCJvd25lckVtYWlsIjoiMTkyMTExMDIyLnNzZUBzYXZlZXRoYS5jb20iLCJyb2xsTm8iOiIxOTIxMTEwMjIifQ.8mldSQ5e81P5eG1oh3ej2L11h30mncYhhvACj8y3HK0"
  const handleFetchNumbers = async () => {
    try {
      const res = await fetch(apiUrls[qualifier], {
        headers: {
          'Authorization': `Bearer ${token}` 
        },
        mode: 'no-cors'
      });
      const data = await res.json();
      console.log(data)
      setResponse(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      <h1>Average Calculator</h1>
      <div>
        <label>
          Select Qualifier:
          <select value={qualifier} onChange={(e) => setQualifier(e.target.value)}>
            <option value="p">Prime</option>
            <option value="f">Fibonacci</option>
            <option value="e">Even</option>
            <option value="r">Random</option>
          </select>
        </label>
        <button onClick={handleFetchNumbers}>Fetch Numbers</button>
      </div>
      {response && (
        <div>
          <h2>Response</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
          <h3>Average: {response.numbers.reduce((a, b) => a + b, 0) / response.numbers.length}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
