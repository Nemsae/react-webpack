import React, { Component } from 'react';
// import PokemonActions from '../actions/PokemonActions';
import PokemonStore from '../stores/PokemonStore';

export default class PokemonTeam extends Component {
  constructor() {
    super();

    this.state = {
      pokemans: PokemonStore.getPokemon(),
    }

    this._onChange = this._onChange.bind(this);
    this._delete = this._delete.bind(this);
  }

  componentWillMount() {
    PokemonStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    PokemonStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      pokemans: PokemonStore.getPokemon(),
    })

  }

  _delete() {
    PokemonActions.deletePokemon();
  }

  render() {

    const { pokemans } = this.state;

    return (
      <div className='container'>

        {pokemans.map(pokemon => (
          <div key={pokemon.id} className="team" >
            <div className='col-xs-8'>
              <h4 className='text-center'>{pokemon.name}</h4>
            </div>
            <div className="col-xs-4">
              <button onClick={this._delete}>X</button>
            </div>
            <div className="col-xs-12">
              <img src={pokemon.img} alt="pokeman!"/>
            </div>
            <div className="col-xs-12">
              <div className="row">
                Type: {pokemon.stats.type}
              </div>
              <div className="row">
                Weight: {pokemon.stats.weight}
              </div>
              <div className="row">
                HP: {pokemon.stats.hp}
              </div>
              <div className="row">
                ATK: {pokemon.stats.attack}
              </div>
              <div className="row">
                Defense: {pokemon.stats.defense}
              </div>
              <div className="row">
                Speed: {pokemon.stats.speed}
              </div>
            </div>
          </div>
        ))}

      </div>
    )
  }
}
