import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute} from '@angular/router';
import { PokemonService } from '../service/pokemon.service';
import { Pokemon } from '../model/pokemon.model';

@Component({
  selector: 'app-pokemon-info',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './pokemon-info.component.html',
  styleUrl: './pokemon-info.component.css'
})
export class PokemonInfoComponent implements OnInit {

  pokemon: Pokemon;

  constructor(private pokemonService: PokemonService, 
    private route: ActivatedRoute){}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.pokemon = this.pokemonService.getPokemonInformation(id);
  }
}
