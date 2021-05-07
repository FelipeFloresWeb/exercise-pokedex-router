import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <h1> Pokedex </h1>
      <Switch>
      <Route path="/" exact render={ (props) => <Pokedex { ...props } pokemons={ pokemons } />}/>
      <Route path="/pokemons/:pokemonid" render={ (props) => <PokemonDetails { ...props } pokemons={ pokemons } />}/>
      <Route path="/pokemons" component={ PokemonDetails }></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;