import { EventEmitter }  from 'events';
import AppDispatcher from '../AppDispatcher';

let _pokemon = [];

class PokemonStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_POKEMON':
        let { pokemonPackage } = action.payload;
          _pokemon.push(pokemonPackage);
          (console.log('_pokemon: ',_pokemon))
          this.emit('CHANGE');
          break;


      }
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

}

export default new PokemonStore();
