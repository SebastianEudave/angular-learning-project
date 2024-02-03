import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule, ActivatedRoute, Router, ParamMap} from '@angular/router';
import { PokemonService } from '../service/pokemon.service';
import { Pokemon } from '../model/pokemon.model';
import { Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CustomNumberPipe } from '../pipe/custom-number.pipe';
import { Pokedex } from '../model/pokedex.model';

@Component({
  selector: 'app-pokemon-info',
  standalone: true,
  imports: [ RouterModule, CommonModule, CustomNumberPipe ],
  templateUrl: './pokemon-info.component.html',
  styleUrl: './pokemon-info.component.css'
})
export class PokemonInfoComponent implements OnInit {

  @Input() pokemonUrl!: string;
  @Output() pokemonDetailNotActive = new EventEmitter<boolean>();
  pokemon$!: Pokemon;

  constructor(private pokemonService: PokemonService, 
    private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.pokemonService.getPokemonInformation(this.pokemonUrl).subscribe(
      (results: Pokemon) => {
        console.log(results);
        this.pokemon$ = results;
      }
    )
  }

  hidePokemonInfo() {
    this.pokemonDetailNotActive.emit(false);
  }
}
