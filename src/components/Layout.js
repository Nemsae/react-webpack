import React, { Component } from 'react';
import PokemonActions from '../actions/PokemonActions';
import PokemonStore from '../stores/PokemonStore';

import PokemonTeam from './PokemonTeam';

export default class Layout extends Component {
  constructor() {
    super();

    this.fetchPokemon = this.fetchPokemon.bind(this);
  }


  fetchPokemon() {
    let { pokemonNumber } = this.refs;
    let number = pokemonNumber.value;

    PokemonActions.fetchPokemon(number);
  }

  render() {

    return (
      // <div className='container'>
      <div>
        <h1 className='text-center'>My Pokedex</h1>
        <div className="row text-center">
          <input type="number" ref='pokemonNumber'/>
          <button onClick={this.fetchPokemon} className="btn btn-default">Get Pokemon</button>
        </div>
        <div>
          <PokemonTeam />
        </div>
      </div>
    )
  }
}
