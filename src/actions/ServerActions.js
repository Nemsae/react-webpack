import AppDispatcher from '../AppDispatcher';


const ServerActions = {
  receivePokemon(pokemonPackage) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_POKEMON',
      payload: { pokemonPackage }
    })
  },

  receivePokedex(myPokedex) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_POKEDEX',
      payload: { myPokedex }
    })
  },

}

export default ServerActions;
