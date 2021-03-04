import React from 'react';
import Loading from '../components/Cocktails/Loading';
import { useParams, Link } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const getList = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
};

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);
  const [list, setList] = React.useState(getList());

  const addToList = () => {
    const newItem = {
      id: new Date().getTime().toString(),
      title: name,
    };
    setList([...list, newItem]);
  };

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        // console.log(data);
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: img,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            img,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);

  React.useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);
  // console.log(id);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className='section-title'>No cocktail details</h2>;
  }
  const {
    name,
    img,
    info,
    glass,
    category,
    instructions,
    ingredients,
  } = cocktail;
  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        Back
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={img} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>category :</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>name :</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>info :</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass :</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>instructions :</span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'>ingredients :</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </p>
          <p>
            {/* {ingredients.map((item, index) => {
              return item ? (
                <button key={index} className='btn' onClick={addToList}>
                  Add {item} to list
                </button>
              ) : null;
            })} */}
            <button className='btn' onClick={addToList}>
              Add {name} to list
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
