import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { LoginService } from './service/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, RouterModule, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'angular-learning-project';
  isLoggedIn: Observable<boolean>;

  constructor(private loginService: LoginService, private router: Router){}

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.loginObservable;
  }

  logout(): void {
    this.loginService.signOut();
    this.router.navigate(['/login']);
  }
}
