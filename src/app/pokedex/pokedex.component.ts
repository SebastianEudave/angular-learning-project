import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { PokemonService } from '../service/pokemon.service';
import { Pokemon } from '../model/pokemon.model';
import { CommonModule } from '@angular/common';
import { PokemonComponentComponent } from '../pokemon-component/pokemon-component.component';
import { Pokedex } from '../model/pokedex.model';
import { PokemonInfoComponent } from '../pokemon-info/pokemon-info.component';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [ CommonModule, PokemonComponentComponent, PokemonInfoComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent implements OnInit {

  pokemonList$: Pokedex[] = [];
  pokemonDetailActive: boolean;
  selectedPokemonUrl: string;

  constructor(private pokemonService: PokemonService,
    private route: ActivatedRoute){
      this.pokemonDetailActive = false;
    }

  ngOnInit() {
    this.pokemonService.getPokedex().subscribe(
      (results: any) => {
        console.log(results);
        for(let p of results.results) {
          this.pokemonList$.push(p)
        }
      }
    )
    console.log(this.pokemonList$);
  }

  setPokemonDetailTrue(pokemonUrl: string): void{
    this.selectedPokemonUrl = pokemonUrl;
    this.pokemonDetailActive = true;
  }
}
