import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Pokedex } from '../model/pokedex.model';

@Component({
  selector: 'app-pokemon-component',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './pokemon-component.component.html',
  styleUrl: './pokemon-component.component.css'
})
export class PokemonComponentComponent {

  @Input() pokemon!: Pokedex;
  @Output() selectedUrl: EventEmitter<string> = new EventEmitter<string>();

}
