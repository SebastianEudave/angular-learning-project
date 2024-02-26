import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokedexComponent } from './pokedex.component';
import { PokemonService } from '../service/pokemon.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../model/pokemon.model';

describe('PokedexComponent', () => {
  let component: PokedexComponent;
  let fixture: ComponentFixture<PokedexComponent>;
  let pokemonServiceSpy: jasmine.SpyObj<PokemonService>;

  beforeEach(async () => {

    const spy = jasmine.createSpyObj('PokemonService', {'getPokedex': new Observable<Pokemon[]>()});

    await TestBed.configureTestingModule({
      imports: [PokedexComponent],
      providers: [PokedexComponent,{ provide: PokemonService, useValue: spy }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    pokemonServiceSpy = TestBed.inject(PokemonService) as jasmine.SpyObj<PokemonService>;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
