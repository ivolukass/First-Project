import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import List from './components/List/SomeList';
import Error from './pages/Error';
import SingleCocktail from './pages/SingleCocktail';
import Tours from './components/Tours/Tours';
import Menu from './components/Menu/Menu';
import Accordion from './components/Accordion/Accordion';
import Review from './components/Review/Review';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/list'>
            <List />
          </Route>
          <Route exact path='/tours'>
            <Tours />
          </Route>
          <Route exact path='/menu'>
            <Menu />
          </Route>
          <Route exact path='/accordion'>
            <Accordion />
          </Route>
          <Route exact path='/review'>
            <Review />
          </Route>
          <Route exact path='/users'>
            <Posts />
          </Route>
          <Route path='/cocktail/:id'>
            <SingleCocktail />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
