import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <h1> Pokedex </h1>
      <Route path="/" exact render={ (props) => <Pokedex { ...props } pokemons={ pokemons } />}/>
    </div>
    </Router>
  );
}

export default App;