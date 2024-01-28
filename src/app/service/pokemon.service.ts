import { Injectable } from '@angular/core';
import { Pokemon } from '../model/pokemon.model';
import pokemonData from '../../assets/data.json';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  pokemonList: Pokemon[] = pokemonData;

  constructor() { }

  getPokedex (): Observable<Pokemon[]> {
    return of(this.pokemonList);
  }

  getPokemonInformation (id: string): Observable<Pokemon> {
    return this.getPokedex().pipe(
      map((pokemonList: Pokemon[]) => pokemonList.find(pokemon => pokemon.id === +id)!)
    );
  }
}
