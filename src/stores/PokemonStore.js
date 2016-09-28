import { EventEmitter }  from 'events';
import AppDispatcher from '../AppDispatcher';
import Storage from '../Storage';

let _pokemon = Storage.read('pokemon') || [];
let _pokedex = undefined;

class PokemonStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_POKEMON':
          let { pokemonPackage } = action.payload;
          _pokemon.push(pokemonPackage);
          this.emit('CHANGE');
          break;

        case 'DELETE_POKEMON':
          let { id } = action.payload;
          _pokemon = filter(id);
          this.emit('CHANGE');
          break;

        case 'RECEIVE_POKEDEX':
          let { myPokedex } = action.payload;
          _pokedex = myPokedex.pokemon_entries;
          this.emit('CHANGE');
          break;

        case 'CLEAR_POKEDEX':
          _pokedex = undefined;
          this.emit('CHANGE');
          break;

      }
    });

    this.on('CHANGE', () => {
      Storage.write('pokemon', _pokemon);
    })
  }

  startListening(cb) {
    this.on('CHANGE',cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE',cb);
  }

  getPokemon() {
    return _pokemon;
  }

  getPokedex() {
    return _pokedex;
  }

}

let Store = new PokemonStore();
export default Store;

function filter(currId) {
  let updatedPokemon = _pokemon.filter(pokemon => {
    if (pokemon.id == currId) {
      return;
    } else {
      return pokemon;
    }
  })
  return updatedPokemon;
}
