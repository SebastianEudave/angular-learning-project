import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Router, ParamMap} from '@angular/router';
import { PokemonService } from '../service/pokemon.service';
import { Pokemon } from '../model/pokemon.model';
import { Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CustomNumberPipe } from '../pipe/custom-number.pipe';

@Component({
  selector: 'app-pokemon-info',
  standalone: true,
  imports: [ RouterModule, CommonModule, CustomNumberPipe ],
  templateUrl: './pokemon-info.component.html',
  styleUrl: './pokemon-info.component.css'
})
export class PokemonInfoComponent implements OnInit {

  pokemon$!: Observable<Pokemon>;

  constructor(private pokemonService: PokemonService, 
    private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.pokemon$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.pokemonService.getPokemonInformation(params.get('id')!)));
  }
}
