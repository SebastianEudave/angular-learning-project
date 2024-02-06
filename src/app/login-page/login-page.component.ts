import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';
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
export class LoginPageComponent implements OnInit {
  userLogin = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });
  isLoggedIn: boolean = false;

  constructor(private tokenStorage: TokenStorageService,
    private loginService: LoginService,
    private formBuilder: FormBuilder){}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    this.tokenStorage.saveToken(this.loginService.login(this.userLogin.value.username, this.userLogin.value.password));
    this.isLoggedIn = true;
    this.reloadPage();
  }

  reloadPage(): void {
    window.location.reload();
  }
}
