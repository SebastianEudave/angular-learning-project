import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { PokemonService } from '../service/pokemon.service';
import { Pokemon } from '../model/pokemon.model';
import { CommonModule } from '@angular/common';
import { PokemonComponentComponent } from '../pokemon-component/pokemon-component.component';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [ CommonModule, PokemonComponentComponent ],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent implements OnInit {

  pokemonList$: Observable<Pokemon[]>;
  selectedId : number;

  constructor(private pokemonService: PokemonService,
    private route: ActivatedRoute){}

  ngOnInit() {

    this.pokemonList$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = Number(params.get('id'));
        return this.pokemonService.getPokedex();
      })
    );
  }
}
