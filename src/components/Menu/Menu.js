import React, { useState } from 'react';
import MenuList from './MenuList';
import Categories from './Categories';
import items from './data';
import './menu.css';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];
console.log(allCategories);

const Menu = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu selection'>
        <div className='title'>
          <h2>Menu</h2>
          <div className='underline-m'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <MenuList items={menuItems} />
      </section>
    </main>
  );
};
export default Menu;
