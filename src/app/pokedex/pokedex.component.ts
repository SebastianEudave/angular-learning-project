import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';
import { CommonModule } from '@angular/common';
import { PokemonInfoComponent } from '../pokemon-info/pokemon-info.component';
import { Pokemon } from '../model/pokemon.model';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [ CommonModule, PokemonInfoComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent implements OnInit {

  pokemonList: Pokemon[] = [];
  pokemonDetailActive: boolean;
  selectedPokemon: Pokemon;

  constructor(private pokemonService: PokemonService){
      this.pokemonDetailActive = false;
  }

  ngOnInit() {
    this.pokemonService.getPokedex().subscribe(
      (results: Pokemon[]) => this.pokemonList = results
    );
  }

  setPokemonDetailTrue(pokemon: number): void{
    this.selectedPokemon = this.pokemonList[pokemon - 1];
    this.pokemonDetailActive = true;
  }
}
