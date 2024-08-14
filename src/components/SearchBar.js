import React, { useState } from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="input-field col s12 m8 offset-m2">
          <input
            id="search"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for news..."
          />
          <label htmlFor="search">Search News</label>
        </div>
        <div className="col s12 m2 center-align">
          <button className="btn waves-effect waves-light" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
