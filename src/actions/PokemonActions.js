import API from '../API';
import AppDispatcher from '../AppDispatcher';

const PokemonActions = {
  fetchPokemon(number) {
    API.fetchPokemon(number);
  },

  fetchPokedex() {
    API.fetchPokedex();
  },

  deletePokemon(id) {
    AppDispatcher.dispatch({
      type: 'DELETE_POKEMON',
      payload: { id }
    })
  },

  clearPokedex() {
    AppDispatcher.dispatch({
      type: 'CLEAR_POKEDEX',
    })
  }

}

export default PokemonActions;
