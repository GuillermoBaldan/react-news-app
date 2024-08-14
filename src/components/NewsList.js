import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ news }) => {
  return (
    <div>
      {news.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
