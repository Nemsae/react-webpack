import $ from 'jquery';
import ServerActions from './actions/ServerActions';
import uuid from 'uuid';

const API = {
  fetchPokemon(number) {
    $.get(`http://pokeapi.co/api/v2/pokemon/${number}`, pokemon => {

      let pokePackage = {
        name: pokemon.name,
        img: pokemon.sprites.front_default,
        stats: {
          type: pokemon.types[0].type.name,
          weight: pokemon.weight,
          hp: pokemon.stats[5].base_stat,
          attack: pokemon.stats[4].base_stat,
          defense: pokemon.stats[3].base_stat,
          speed: pokemon.stats[0].base_stat,
        },
        id: uuid(),
      }

      ServerActions.receivePokemon(pokePackage);
    });
  },

  fetchPokedex() {
    $.get(`https://pokeapi.co/api/v2/pokedex/1/`, pokedex => {
      ServerActions.receivePokedex(pokedex);
    })
  }
}

export default API;
