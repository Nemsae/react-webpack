import React, { Component } from 'react';

import ServerActions from '../actions/ServerActions';
import PokemonActions from '../actions/PokemonActions';
import PokemonStore from '../stores/PokemonStore';

export default class  Pokedex extends Component {
  constructor() {
    super();

    this.state = {
      pokedex: PokemonStore.getPokedex(),
    }

    this._getPokedex = this._getPokedex.bind(this);
    this._onChange = this._onChange.bind(this);
    this._fetchPokemon = this._fetchPokemon.bind(this);
    this._clearPokedex = this._clearPokedex.bind(this);
  }

  componentWillMount() {
    PokemonStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    PokemonStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      pokedex: PokemonStore.getPokedex(),
    })
  }

  _getPokedex() {
    PokemonActions.fetchPokedex();
  }

  _fetchPokemon(id) {
    PokemonActions.fetchPokemon(id);
  }

  _clearPokedex() {
    PokemonActions.clearPokedex();
  }

  render() {
    let { pokedex } = this.state;

    let Pokedex = [];
    if (pokedex !== undefined) {
      Pokedex = pokedex.map((pokemon, i) => {
        let pokeNumber = pokemon.entry_number
        let pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeNumber}.png`
        return (
          <button key={i} onClick={() => this._fetchPokemon(pokeNumber)}><img src={pokeImg} alt={pokeNumber}/></button>
        )
      })
    }

    return (
      <div className='text-center'>
        <h2 className='pokedex'>PokeDex</h2>
        <button onClick={this._getPokedex} className='pokedexButton'>Open Pokedex</button>
        <button onClick={this._clearPokedex} className='pokedexButton'>Close Pokedex</button>
        <div>
          {Pokedex}
        </div>
      </div>
    )
  }
}
