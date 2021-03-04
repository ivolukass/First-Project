import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import './list.css';

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className='grocery-list'>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className='grocery-item'>
            <p className='title-l'>{title}</p>
            <div className='btn-container'>
              <button
                type='button'
                className='edit-btn-l'
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type='button'
                className='delete-btn-l'
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default List;
