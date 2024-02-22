import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { TokenStorageService } from '../service/token-storage.service';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let tokenServiceSpy: jasmine.SpyObj<TokenStorageService>;
  let $window;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('TokenStorageService', ['getToken', 'saveToken']);
    $window = {
      location:{
        reload: jasmine.createSpy()
      }
    };
    await TestBed.configureTestingModule({
      imports: [LoginPageComponent],
      providers: [LoginPageComponent, { provide: TokenStorageService, useValue: spy }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    tokenServiceSpy = TestBed.inject(TokenStorageService) as jasmine.SpyObj<TokenStorageService>;
  });

  it('should initialize IsLoggedIn to false', () => {
    expect(component.isLoggedIn).toBeFalse();
  });

  it('should initialize LoggedIn onInit to true with valid token', () => {
    const stubValue = "token";
    tokenServiceSpy.getToken.and.returnValue(stubValue);
    component.ngOnInit()
    expect(component.isLoggedIn).toBeTrue();
  });

  it('should initialize LoggedIn onInit to false with invalid token', () => {
    const stubValue = null;
    tokenServiceSpy.getToken.and.returnValue(stubValue);
    component.ngOnInit()
    expect(component.isLoggedIn).toBeFalse();
  });

  it('should saveToken and change isLoggedIn to true', () => {
    component.reloadPage = function() { };
    component.onSubmit()
    expect(component.isLoggedIn).toBeTrue();
    expect(tokenServiceSpy.saveToken.calls.count()).toBe(1);
  });

});
