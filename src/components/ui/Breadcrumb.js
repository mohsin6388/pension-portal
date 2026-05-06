import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  return (
    <div className="text-sm text-gray-500 mb-3">
      {items.map((item, i) => (
        <span key={i}>
          {i > 0 && <span className="mx-1">{'>'}</span>}
          {item.link ? (
            <Link to={item.link} className="text-blue-600 hover:underline">{item.label}</Link>
          ) : (
            <span className="text-gray-600">{item.label}</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
