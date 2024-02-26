import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule, ActivatedRoute, Router} from '@angular/router';
import { PokemonService } from '../service/pokemon.service';
import { Pokemon } from '../model/pokemon.model';
import { CommonModule } from '@angular/common';
import { CustomNumberPipe } from '../pipe/custom-number.pipe';

@Component({
  selector: 'app-pokemon-info',
  standalone: true,
  imports: [ RouterModule, CommonModule, CustomNumberPipe ],
  templateUrl: './pokemon-info.component.html',
  styleUrl: './pokemon-info.component.css'
})
export class PokemonInfoComponent{

  @Input() pokemon!: Pokemon;
  @Output() pokemonDetailNotActive = new EventEmitter<boolean>();

  constructor(private pokemonService: PokemonService,
    private route: ActivatedRoute, private router: Router){}

  hidePokemonInfo() {
    this.pokemonDetailNotActive.emit(false);
  }
}
