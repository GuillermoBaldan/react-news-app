import React, { useState } from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for news..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
