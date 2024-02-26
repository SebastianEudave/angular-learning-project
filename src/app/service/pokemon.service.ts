import { Injectable } from '@angular/core';
import { Pokemon } from '../model/pokemon.model';
import { Observable, catchError, concatMap, finalize, from, map, mergeMap, of, pluck, switchMap, tap, toArray } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { HttpClient } from '@angular/common/http';
import { Pokedex } from '../model/pokedex.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokedex(): Observable<Pokemon[]>{
    return fromFetch("https://pokeapi.co/api/v2/pokemon?limit=40").pipe(switchMap(response => {
      if (response.ok) {
        return response.json();
      } else {
        return of({ error: true, message: `Error ${ response.status }` });
      }
    }), switchMap(result => from(result.results)),
    concatMap((pokedexEntry: Pokedex) => this.http.get<Pokemon>(pokedexEntry.url)), tap(pokemon => pokemon.image = pokemon.sprites['front_default']), 
    toArray(), catchError(error => {
      console.error("Error while processing pokemon: "+error.message);
      return [];
    }
    ), finalize(() => console.log("Finished processing the Pokemon!")));
  }
}
