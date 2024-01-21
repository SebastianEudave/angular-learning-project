import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PokemonComponentComponent } from './pokemon-component/pokemon-component.component';
import { PokemonService } from './service/pokemon.service';
import { Pokemon } from './model/pokemon.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PokemonComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular-learning-project';
  pokemonList: Pokemon[];

  constructor(private pokemonService: PokemonService){}

  ngOnInit() {
    this.pokemonList = this.pokemonService.getPokedex();
  }
  

}
