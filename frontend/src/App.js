import React, { useEffect, useState } from 'react';

function App() {
  const [quote, setQuote] = useState('Loading...');

  useEffect(() => {
    fetch('https://your-backend-url.onrender.com/api/quote')  // replace with your actual deployed Flask backend URL
      .then((response) => response.json())
      .then((data) => setQuote(data.quote))
      .catch((error) => setQuote('Failed to load quote.'));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>Quote of the Day</h1>
      <p style={{ fontSize: '1.5rem' }}>{quote}</p>
    </div>
  );
}

export default App;
