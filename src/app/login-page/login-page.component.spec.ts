import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { LoginService } from '../service/login.service';
import { BehaviorSubject } from 'rxjs';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let loginServiceSpy: jasmine.SpyObj<LoginService>;
  const loginObservableMock = new BehaviorSubject<boolean>(false);

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('LoginService', ['login'], { loginObservable: loginObservableMock });
    await TestBed.configureTestingModule({
      imports: [LoginPageComponent],
      providers: [LoginPageComponent, { provide: LoginService, useValue: spy }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loginServiceSpy = TestBed.inject(LoginService) as jasmine.SpyObj<LoginService>;
  });

  it('should initialize IsLoggedIn to observableValue false', () => {
    loginObservableMock.next(false);
    let logedIn;
    component.isLoggedIn.subscribe(data => logedIn = data)
    expect(logedIn).toBeFalse();
  });

  it('should initialize IsLoggedIn to observableValue true', () => {
    loginObservableMock.next(true);
    let logedIn;
    component.isLoggedIn.subscribe(data => logedIn = data)
    expect(logedIn).toBeTruthy();
  });

  it('should login on submit', () => {
    component.onSubmit()
    expect(loginServiceSpy.login.calls.count()).toBe(1);
  });

});
