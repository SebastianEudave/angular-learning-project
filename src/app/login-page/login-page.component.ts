import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { CommonModule } from '@angular/common';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {
  userLogin = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });
  isLoggedIn: Observable<boolean>;

  constructor(private loginService: LoginService,
    private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.loginObservable;
  }

  onSubmit(): void {
    this.loginService.login(this.userLogin.value.username, this.userLogin.value.password);
  }
}
