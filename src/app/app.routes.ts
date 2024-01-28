import { Routes } from '@angular/router';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { PokedexComponent } from './pokedex/pokedex.component';

export const routes: Routes = [
    { path: 'pokemon/:id' , component: PokemonInfoComponent },
    { path: '' , component: PokedexComponent }
];