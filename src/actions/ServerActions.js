import AppDispatcher from '../AppDispatcher';


const ServerActions = {
  receivePokemon(pokemonPackage) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_POKEMON',
      payload: { pokemonPackage }
    })
  }
}

export default ServerActions;
