import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <h1> Pokedex </h1>
      <Route path="/" component={Pokedex} />
      <Pokedex pokemons={pokemons} />
    </div>
    </Router>
  );
}

export default App;