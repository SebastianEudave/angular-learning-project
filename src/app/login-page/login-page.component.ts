import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { CommonModule } from '@angular/common';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit, OnDestroy {
  userLogin = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });
  $isAuthenticated: boolean;
  subscription: any;

  constructor(private loginService: LoginService,
    private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.subscription = this.loginService.isLoggedIn.subscribe(value =>
      this.$isAuthenticated = value);
  }

  ngOnDestroy(): void {
      this.subscription.unsuscribe();
  }

  onSubmit(): void {
    this.loginService.login(this.userLogin.value.username, this.userLogin.value.password);
  }
}
