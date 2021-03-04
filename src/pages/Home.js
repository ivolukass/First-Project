import React from 'react';
import CocktailList from '../components/Cocktails/CocktailList';
import SearchForm from '../components/Cocktails/SearchForm';

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
