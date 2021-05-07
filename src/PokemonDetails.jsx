import React, { Component } from 'react';
import data from './data';
import { Link } from 'react-router-dom';

class PokemonDetails extends Component {
  render() {
    const {pokemonid} = this.props.match.params;

    function getPokemon(pid) {
      return data.find((pokemon) => pokemon.id === parseInt(pid, 10));
    }
    const gettedPokemon = getPokemon(pokemonid);
    
    const {name, type, averageWeight, image, summary, foundAt} = gettedPokemon;

    return (
      <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/favorite">Favorite Pokemons</Link>
      </nav>
      <div>
        <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        <img src={image} alt={`${name} sprite`} />
      </div>
      <div>
        <h1>Summary</h1>
        <p>{ summary }</p>
        <h1>Game Locations of {name}</h1>
        
        { foundAt.map((item) =>
        <>
        <h3 key={item.location}>{item.location}</h3>
        <img src={ item.map } alt="map of pokemon location" />
        </>
        ) }
      </div>
        </>
    );
  }
}

export default PokemonDetails;