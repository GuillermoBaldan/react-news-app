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
    truncateTextToLines('.news-item .card-content h5', 3);  // Limitar el título a 3 líneas también

    // Reaplicar la función si el tamaño de la ventana cambia
    const handleResize = () => {
      truncateTextToLines('.news-item .card-content p', 3);
      truncateTextToLines('.news-item .card-content h5', 3);  // Reaplicar el truncamiento al título
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
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
