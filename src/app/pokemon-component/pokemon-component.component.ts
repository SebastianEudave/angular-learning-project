import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-component',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './pokemon-component.component.html',
  styleUrl: './pokemon-component.component.css'
})
export class PokemonComponentComponent {

  @Input() pokemon!: any;

}
