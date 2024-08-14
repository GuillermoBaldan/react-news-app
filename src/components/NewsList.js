import React, { useEffect } from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ news }) => {
  
  useEffect(() => {
    const truncateTextToLines = (selector, lines) => {
      const elements = document.querySelectorAll(selector);
      
      elements.forEach(element => {
        const lineHeight = parseFloat(window.getComputedStyle(element).lineHeight);
        const maxHeight = lineHeight * lines;

        element.style.maxHeight = `${maxHeight}px`;
        element.style.overflow = 'hidden';
        element.style.display = '-webkit-box';
        element.style.webkitBoxOrient = 'vertical';
        element.style.webkitLineClamp = lines;
      });
    };

    // Ejecutar el truncamiento al cargar el componente
    truncateTextToLines('.news-item .card-content p', 3);

    // Reaplicar la función si el tamaño de la ventana cambia
    window.addEventListener('resize', () => {
      truncateTextToLines('.news-item .card-content p', 3);
    });

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', () => {
        truncateTextToLines('.news-item .card-content p', 3);
      });
    };
  }, []); // Empty dependency array to ensure it runs only on mount

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
