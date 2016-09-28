import API from '../API';
import AppDispatcher from '../AppDispatcher';

const PokemonActions = {
  fetchPokemon(number) {
    API.fetchPokemon(number);
  },

  deletePokemon(id) {
    AppDispatcher.dispatch({
      type: 'DELETE_POKEMON',
      pay
    })
  }

}

export default PokemonActions;
