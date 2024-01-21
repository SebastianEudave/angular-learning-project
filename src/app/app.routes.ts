import { Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { bootstrapApplication } from '@angular/platform-browser';

export const routes: Routes = [
    { path: 'pokemon/:id' , component: PokemonInfoComponent }
];