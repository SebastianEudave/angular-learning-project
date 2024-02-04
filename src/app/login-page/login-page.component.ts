import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';
import { LoginService } from '../service/login.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn: boolean = false;

  constructor(private tokenStorage: TokenStorageService, private loginService: LoginService){}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.tokenStorage.saveToken(this.loginService.login(username, password));
    this.isLoggedIn = true;
    this.reloadPage();
  }

  reloadPage(): void {
    window.location.reload();
  }
}
