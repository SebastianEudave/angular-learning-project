import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonInfoComponent } from './pokemon-info.component';
import { PokemonService } from '../service/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';

describe('PokemonInfoComponent', () => {
  let component: PokemonInfoComponent;
  let fixture: ComponentFixture<PokemonInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonInfoComponent],
      providers: [{ provide: PokemonService, useValue: true },
        { provide: ActivatedRoute, useValue: true },
        { provide: Router, useValue: true }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
