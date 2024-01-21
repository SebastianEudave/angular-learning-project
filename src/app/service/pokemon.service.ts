import { Injectable } from '@angular/core';
import { Pokemon } from '../model/pokemon.model';
import pokemonData from '../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  pokemonList: Pokemon[] = pokemonData;

  constructor() { }

  getPokedex (): Pokemon[] {
    return this.pokemonList;
  }

  getPokemonInformation (id: string): Pokemon {
    return this.pokemonList[id];
  }
}
