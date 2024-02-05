import { Injectable } from '@angular/core';
import { Pokemon } from '../model/pokemon.model';
import pokemonData from '../../assets/data.json';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pokedex } from '../model/pokedex.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokedex (): Observable<Pokedex[]> {
    return this.http.get<Pokedex[]>("https://pokeapi.co/api/v2/pokemon");
  }

  getPokemonInformation (pokemonUrl: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(pokemonUrl);
  }
}
