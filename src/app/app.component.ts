import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, RouterModule, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy{

  title = 'angular-learning-project';
  $isAuthenticated: boolean;
  susbcription: any;

  constructor(private loginService: LoginService, private router: Router){}

  ngOnInit(): void {
    this.susbcription = this.loginService.isLoggedIn.subscribe(value =>
      this.$isAuthenticated = value);
  }

  ngOnDestroy(): void {
      this.susbcription.unsuscribe();
  }

  logout(): void {
    this.loginService.signOut();
    this.router.navigate(['/login']);
  }
}
