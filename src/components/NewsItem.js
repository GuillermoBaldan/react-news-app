import React from 'react';

const NewsItem = ({ article }) => {
  return (
    <div className="card news-item">
      <div className="card-image">
        <img src={article.urlToImage} alt={article.title} style={{ height: '150px', objectFit: 'cover' }} />
        <span className="card-title">{article.source.name}</span>
      </div>
      <div className="card-content">
        <h5>{article.title}</h5>
        <p>{article.description}</p>
      </div>
      <div className="card-action">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
