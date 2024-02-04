import { Routes } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { canActivateFn } from './service/login.service';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'pokedex' ,
        component: PokedexComponent,
        canActivate: [canActivateFn]
    },
    { path: 'login' , component: LoginPageComponent},
    { path: 'home' , component: HomeComponent },
    { path: '**' , redirectTo: 'home' }
];