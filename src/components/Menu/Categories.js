import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container-m'>
      {categories.map((category, index) => {
        return (
          <button
            type='button'
            className='filter-btn-m'
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
