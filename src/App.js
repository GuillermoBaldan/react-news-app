import React, { useState, useEffect } from 'react';
import NewsList from './components/NewsList';
import SearchBar from './components/SearchBar';

const App = () => {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('technology');
  const YOUR_API_KEY = "8caaf14d49cc43faad98bd642fe239ac"

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${YOUR_API_KEY}`);
      const data = await response.json();
      setNews(data.articles);
    };

    fetchNews();
  }, [searchTerm]);

  return (
    <div className="App">
      <h1>News App</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <NewsList news={news} />
    </div>
  );
};

export default App;
