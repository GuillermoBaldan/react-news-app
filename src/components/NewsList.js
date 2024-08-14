import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ news }) => {
  return (
    <div className="row">
      {news.map((article, index) => (
        <div className="col s12 m6" key={index}>
          <NewsItem article={article} />
        </div>
      ))}
    </div>
  );
};

export default NewsList;
